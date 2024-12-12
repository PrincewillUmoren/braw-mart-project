export default function CartInput({val, handle}) {
  return (
    <input type="number" name="num" min={1} max={5} defaultValue={val} onChange={handle}/>
  )
}