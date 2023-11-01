

export const metadata = {
  title: 'task',
  description: 'task management systenm',
}

export default function rootLayout({ children }) {
  return (
    <section lang="en">
         
        <div>
        <main className={"app"}>{children}</main>
        </div>
        
    </section>
  )
}
