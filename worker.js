export default {
  async fetch(request, env) {
    const tasks = [];

    try {
      // 解析请求体中的 JSON 数据
      const { prompt } = await request.json();

      // 检查是否包含 'prompt' 属性
      if (!prompt) {
        return new Response('Missing "prompt" in request body', {
          status: 400, // Bad Request
          headers: { 'Content-Type': 'text/plain' }
        });
      }

      // messages - chat style input
      let chat = {
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt } // 使用正确的属性名
        ]
      };

      let response = await env.AI.run('@cf/meta/llama-3-8b-instruct', chat);
      tasks.push({ inputs: chat, response });
      // 提取每个任务的 response.response 字段
      const extractedResponses = tasks.map(task => task.response.response);
      // 将提取的响应转换为 JSON 字符串并返回
      return new Response(JSON.stringify(extractedResponses), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response('Error processing request', {
        status: 500, // Internal Server Error
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }
};