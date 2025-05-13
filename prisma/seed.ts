import { PrismaClient } from '../lib/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('开始清除现有数据...');
    // 安全检查：先检查表是否存在
    try {
      await prisma.quote.deleteMany();
      console.log('清除Quote表数据成功');
    } catch (error) {
      console.log('Quote表可能不存在，跳过清除');
    }
    
    try {
      await prisma.contact.deleteMany();
      console.log('清除Contact表数据成功');
    } catch (error) {
      console.log('Contact表可能不存在，跳过清除');
    }
    
    try {
      await prisma.postmarkSetting.deleteMany();
      console.log('清除PostmarkSetting表数据成功');
    } catch (error) {
      console.log('PostmarkSetting表可能不存在，跳过清除');
    }

    // 添加PostmarkSetting初始数据
    try {
      console.log('正在添加PostmarkSetting初始数据...');
      await prisma.postmarkSetting.create({
        data: {
          apiToken: "0addebb5-6e41-44b6-af05-7ec14d9e2852", // 示例token
          fromEmail: "no-reply@sinoprimeshipping.com",
          messageStream: "outbound",
          enabled: true,
          updatedAt: new Date()
        }
      });
      console.log('PostmarkSetting初始数据添加成功');
    } catch (error) {
      console.error('添加PostmarkSetting数据失败:', error);
    }

    // 添加报价请求示例数据
    try {
      console.log('正在添加Quote示例数据...');
      await prisma.quote.createMany({
        data: [
          {
            fullName: '张三',
            email: 'zhangsan@example.com',
            phone: '13812345678',
            website: 'https://example.com',
            productCategory: '电子产品',
            ecommercePlatform: 'shopify',
            shipmentsPerMonth: '101-500',
            concerns: '我需要一个能够帮助处理海关清关的物流解决方案。',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            fullName: '李四',
            email: 'lisi@example.com',
            phone: '13987654321',
            website: 'https://lisi-shop.com',
            productCategory: '服装',
            ecommercePlatform: 'woocommerce',
            shipmentsPerMonth: '501-1000',
            concerns: '我们需要一个能够跟踪货物实时状态的系统。',
            createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1天前
            updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        ],
      });
      console.log('Quote示例数据添加成功');
    } catch (error) {
      console.error('添加Quote数据失败:', error);
    }

    // 添加联系表单示例数据
    try {
      console.log('正在添加Contact示例数据...');
      await prisma.contact.createMany({
        data: [
          {
            fullName: '王五',
            email: 'wangwu@example.com',
            phone: '13712345678',
            website: 'https://wangwu.com',
            message: '请问你们提供加拿大全境的配送服务吗？',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            fullName: '赵六',
            email: 'zhaoliu@example.com',
            phone: '13612345678',
            website: 'https://zhaoliu.com',
            message: '我想了解一下你们的仓储服务价格。',
            createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2天前
            updatedAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
          },
        ],
      });
      console.log('Contact示例数据添加成功');
    } catch (error) {
      console.error('添加Contact数据失败:', error);
    }

    console.log('测试数据已添加成功！');
  } catch (mainError) {
    console.error('执行种子脚本过程中发生主错误:', mainError);
    throw mainError;
  }
}

main()
  .catch((e) => {
    console.error('添加测试数据失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 