import { NextResponse } from "next/server";
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import util from 'util';

// 将exec转换为Promise
const execPromise = util.promisify(exec);

// 已废弃的API - 不再使用，仅适用于SQLite
export async function POST() {
  console.log('POST /api/settings/postmark/create-manual - 此API已废弃，不支持PostgreSQL');
  
  return NextResponse.json({ 
    success: false, 
    error: "此API已废弃，不支持PostgreSQL环境",
    message: "请使用/api/settings/postmark/create-table进行表创建"
  }, { status: 400 });
} 