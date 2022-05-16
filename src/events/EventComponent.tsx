const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return (
    <div>
      <input onChange={onChange}/>
      <div draggable onDragStart={onDragStart}>Drag Me</div>
    </div>
  )
}

export default EventComponent
