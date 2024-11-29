export default function Search({title, handle}) {
  return (
    <div className="my-6 ">
        <input type="text" name="search" id="search" 
        className="border-4 border-blue-600 rounded-md w-1/2 mx-auto block py-3"
        defaultValue={title}
        onChange={handle}/>
    </div>
  )
}