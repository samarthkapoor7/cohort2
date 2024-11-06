import { Hono } from 'hono'

const app = new Hono()

app.post('/api/vi/signup', (c) => {
  return c.text('signup route')
})

app.post('/api/vi/signin', (c) => {
  return c.text('signin route')
})

app.post('/api/vi/blog', (c) => {
  return c.text('post blog route')
})

app.put('/api/vi/blog', (c) => {
  return c.text('post blog route')
})

app.get('/api/vi/blog/:id', (c) => {
  const id = c.req.param('id')
  console.log(id);
  return c.text('get blog route')
})

app.get('/api/vi/blog/bulk', (c) => {
  return c.text('signup route')
})

export default app
