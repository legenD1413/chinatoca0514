import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 创建PostmarkSetting表的API
export async function POST() {
  console.log('POST /api/settings/postmark/create-table - 创建PostmarkSetting表');
  
  try {
    // 检查表是否已存在 - 使用PostgreSQL兼容查询
    const tables = await prisma.$queryRaw`
      SELECT table_name as name FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'PostmarkSetting'
    `;
    
    const tableExists = Array.isArray(tables) && tables.length > 0;
    
    if (tableExists) {
      console.log('表已存在，无需创建');
      return NextResponse.json({ 
        success: true, 
        message: "表已存在，无需创建"
      });
    }
    
    console.log('表不存在，开始创建...');
    
    // 使用Prisma ORM创建表
    try {
      // 通过创建记录来强制创建表
      await prisma.postmarkSetting.create({
        data: {
          apiToken: "0addebb5-6e41-44b6-af05-7ec14d9e2852",
          fromEmail: "no-reply@chinato.ca",
          messageStream: "outbound",
          enabled: true,
          updatedAt: new Date()
        }
      });
      
      console.log('表创建成功并添加了初始记录');
      return NextResponse.json({ 
        success: true, 
        message: "表创建成功并已添加初始记录",
        method: "prisma"
      });
    } catch (createError) {
      console.error('使用Prisma创建表失败:', createError);
      
      // 尝试使用Prisma CLI
      try {
        console.log('尝试使用Prisma CLI推送架构...');
        const { exec } = require('child_process');
        
        // 创建Promise版本的exec
        const execPromise = (command: string): Promise<string> => {
          return new Promise((resolve, reject) => {
            exec(command, (error: Error | null, stdout: string, stderr: string) => {
              if (error) {
                console.error(`执行命令错误: ${error.message}`);
                return reject(error);
              }
              if (stderr) {
                console.error(`命令stderr: ${stderr}`);
              }
              resolve(stdout);
            });
          });
        };
        
        await execPromise('npx prisma migrate deploy');
        console.log('Prisma迁移部署成功');
        
        // 查询表是否创建
        const recheckTables = await prisma.$queryRaw`
          SELECT table_name as name FROM information_schema.tables 
          WHERE table_schema = 'public' AND table_name = 'PostmarkSetting'
        `;
        
        const tableCreated = Array.isArray(recheckTables) && recheckTables.length > 0;
        
        if (tableCreated) {
          console.log('Prisma迁移创建表成功');
          return NextResponse.json({ 
            success: true, 
            message: "表通过Prisma迁移创建成功",
            method: "migrate"
          });
        } else {
          return NextResponse.json({ 
            success: false, 
            error: "表创建失败",
            details: "即使执行了Prisma迁移，表仍未创建"
          }, { status: 500 });
        }
      } catch (migrateError) {
        console.error('Prisma迁移失败:', migrateError);
        return NextResponse.json({ 
          success: false, 
          error: "表创建和迁移均失败",
          createError: String(createError),
          migrateError: String(migrateError)
        }, { status: 500 });
      }
    }
  } catch (error) {
    console.error('创建PostmarkSetting表失败:', error);
    
    return NextResponse.json({ 
      success: false, 
      error: String(error),
      message: "创建表失败，请联系系统管理员"
    }, { status: 500 });
  }
} 