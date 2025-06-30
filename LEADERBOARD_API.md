# 前端榜单查询API文档

## 概述

这是专门为前端网站提供的榜单查询API，只包含查询功能，不包含创建、修改、删除等管理操作。所有接口都位于 `/api/leaderboards` 路径下。

## 基础信息

- **基础URL**: `http://localhost:3000/api/leaderboards`
- **请求方法**: 仅支持 GET
- **响应格式**: JSON
- **字符编码**: UTF-8

## 接口列表

### 1. 获取榜单列表

**接口地址**: `GET /api/leaderboards`

**功能描述**: 获取榜单列表，支持多种查询参数

**请求参数**:
| 参数名 | 类型 | 必填 | 说明 | 示例值 |
|--------|------|------|------|--------|
| year | number | 否 | 年份 (2000-2100) | 2024 |
| month | number | 否 | 月份 (1-12) | 3 |
| week | number | 否 | 周数 (1-53) | 12 |
| isActive | boolean | 否 | 是否活跃 | true |

**请求示例**:
```bash
# 获取所有榜单
curl "http://localhost:3000/api/leaderboards"

# 获取2024年的榜单
curl "http://localhost:3000/api/leaderboards?year=2024"

# 获取2024年3月的榜单
curl "http://localhost:3000/api/leaderboards?year=2024&month=3"

# 获取活跃榜单
curl "http://localhost:3000/api/leaderboards?isActive=true"
```

**响应示例**:
```json
[
  {
    "id": 1,
    "title": "2024年3月第2周交易榜单",
    "year": 2024,
    "month": 3,
    "week": 2,
    "description": "交易竞赛榜单",
    "isActive": true,
    "startDate": "2024-03-04T00:00:00.000Z",
    "endDate": "2024-03-10T23:59:59.000Z",
    "createdAt": "2024-03-01T10:00:00.000Z",
    "updatedAt": "2024-03-01T10:00:00.000Z",
    "entries": [
      {
        "id": 1,
        "accountName": "交易员A",
        "customerId": "CUST001",
        "finalSimulatedGold": 100000,
        "winRate": 75.5,
        "bonus": 5000,
        "totalProfit": 25000,
        "totalTrades": 120,
        "winningTrades": 90,
        "maxDrawdown": 5000,
        "sharpeRatio": 1.8,
        "rankPosition": 1,
        "remarks": "表现优秀",
        "createdAt": "2024-03-01T10:00:00.000Z",
        "updatedAt": "2024-03-01T10:00:00.000Z"
      }
    ]
  }
]
```

### 2. 根据ID获取榜单详情

**接口地址**: `GET /api/leaderboards/:id`

**功能描述**: 根据榜单ID获取详细信息

**路径参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | number | 是 | 榜单ID |

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/1"
```

**响应示例**:
```json
{
  "id": 1,
  "title": "2024年3月第2周交易榜单",
  "year": 2024,
  "month": 3,
  "week": 2,
  "description": "交易竞赛榜单",
  "isActive": true,
  "startDate": "2024-03-04T00:00:00.000Z",
  "endDate": "2024-03-10T23:59:59.000Z",
  "createdAt": "2024-03-01T10:00:00.000Z",
  "updatedAt": "2024-03-01T10:00:00.000Z",
  "entries": [...]
}
```

### 3. 根据年月周获取榜单

**接口地址**: `GET /api/leaderboards/week/:year/:month/:week`

**功能描述**: 根据具体的年月周获取榜单

**路径参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| year | number | 是 | 年份 |
| month | number | 是 | 月份 |
| week | number | 是 | 周数 |

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/week/2024/3/2"
```

### 4. 获取榜单条目

**接口地址**: `GET /api/leaderboards/:id/entries`

**功能描述**: 获取指定榜单的所有条目，按排名排序

**路径参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | number | 是 | 榜单ID |

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/1/entries"
```

**响应示例**:
```json
[
  {
    "id": 1,
    "accountName": "交易员A",
    "customerId": "CUST001",
    "finalSimulatedGold": 100000,
    "winRate": 75.5,
    "bonus": 5000,
    "totalProfit": 25000,
    "totalTrades": 120,
    "winningTrades": 90,
    "maxDrawdown": 5000,
    "sharpeRatio": 1.8,
    "rankPosition": 1,
    "remarks": "表现优秀",
    "createdAt": "2024-03-01T10:00:00.000Z",
    "updatedAt": "2024-03-01T10:00:00.000Z"
  }
]
```

### 5. 获取当前年份榜单

**接口地址**: `GET /api/leaderboards/current-year`

**功能描述**: 获取当前年份的所有榜单

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/current-year"
```

### 6. 获取当前月份榜单

**接口地址**: `GET /api/leaderboards/current-month`

**功能描述**: 获取当前月份的所有榜单

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/current-month"
```

### 7. 获取活跃榜单

**接口地址**: `GET /api/leaderboards/active`

**功能描述**: 获取所有活跃状态的榜单

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/active"
```

### 8. 获取特定年份活跃榜单

**接口地址**: `GET /api/leaderboards/active/:year`

**功能描述**: 获取指定年份的活跃榜单

**路径参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| year | number | 是 | 年份 |

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/active/2024"
```

### 9. 获取最新榜单

**接口地址**: `GET /api/leaderboards/latest`

**功能描述**: 获取最新创建的榜单（按创建时间排序，默认返回前10个）

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/latest"
```

### 10. 获取热门榜单

**接口地址**: `GET /api/leaderboards/popular`

**功能描述**: 获取热门榜单（按条目数量排序，默认返回前10个）

**请求示例**:
```bash
curl "http://localhost:3000/api/leaderboards/popular"
```

## 数据字段说明

### 榜单字段 (Leaderboard)

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | number | 榜单ID |
| title | string | 榜单标题 |
| year | number | 年份 |
| month | number | 月份 |
| week | number | 周数 |
| description | string | 榜单描述 |
| isActive | boolean | 是否活跃 |
| startDate | string | 开始日期 |
| endDate | string | 结束日期 |
| createdAt | string | 创建时间 |
| updatedAt | string | 更新时间 |
| entries | array | 榜单条目列表 |

### 榜单条目字段 (LeaderboardEntry)

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | number | 条目ID |
| accountName | string | 账户名称 |
| customerId | string | 客户ID |
| finalSimulatedGold | number | 最终模拟金币 |
| winRate | number | 胜率 (%) |
| bonus | number | 奖金 |
| totalProfit | number | 总利润 |
| totalTrades | number | 总交易次数 |
| winningTrades | number | 获胜交易次数 |
| maxDrawdown | number | 最大回撤 |
| sharpeRatio | number | 夏普比率 |
| rankPosition | number | 排名位置 |
| remarks | string | 备注 |
| createdAt | string | 创建时间 |
| updatedAt | string | 更新时间 |

## 错误响应

当请求失败时，API会返回相应的HTTP状态码和错误信息：

```json
{
  "message": "错误描述",
  "error": "错误类型",
  "statusCode": 400
}
```

### 常见错误码

| 状态码 | 说明 |
|--------|------|
| 400 | 请求参数错误 |
| 404 | 资源不存在 |
| 429 | 请求过于频繁 |
| 500 | 服务器内部错误 |

## 使用建议

1. **缓存策略**: 建议前端对榜单数据进行适当缓存，减少服务器压力
2. **分页处理**: 对于大量数据的查询，建议实现前端分页
3. **错误处理**: 妥善处理API错误响应，提供友好的用户提示
4. **加载状态**: 在数据加载过程中显示加载状态
5. **数据更新**: 定期刷新数据，确保信息时效性

## 前端集成示例

### JavaScript/TypeScript 示例

```javascript
// 获取榜单列表
async function getLeaderboards(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`/api/leaderboards?${queryString}`);
  return response.json();
}

// 获取当前年份榜单
async function getCurrentYearLeaderboards() {
  const response = await fetch('/api/leaderboards/current-year');
  return response.json();
}

// 获取活跃榜单
async function getActiveLeaderboards() {
  const response = await fetch('/api/leaderboards/active');
  return response.json();
}

// 使用示例
getCurrentYearLeaderboards().then(leaderboards => {
  console.log('当前年份榜单:', leaderboards);
});
```

### React 示例

```jsx
import { useState, useEffect } from 'react';

function LeaderboardList() {
  const [leaderboards, setLeaderboards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leaderboards/active')
      .then(response => response.json())
      .then(data => {
        setLeaderboards(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('获取榜单失败:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>加载中...</div>;

  return (
    <div>
      {leaderboards.map(leaderboard => (
        <div key={leaderboard.id}>
          <h3>{leaderboard.title}</h3>
          <p>{leaderboard.description}</p>
        </div>
      ))}
    </div>
  );
}
``` 