export default function WidgetWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed bottom-5 right-3 sm:bottom-[3rem] sm:right-[3rem] flex flex-col items-center justify-between p-1  bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-70 shadow-2xl rounded-lg transition-all dark:bg-gray-950 dark:bg-transparent dark:border-slate-700">
      {children}
    </div>
  )
}
