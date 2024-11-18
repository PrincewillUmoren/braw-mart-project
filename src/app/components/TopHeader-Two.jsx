import Image from "next/image";

export default function TopHeaderTwo() {
  return (
    <div>
        <Image src={'/header.png'} alt="logo" width={'150'} height={'150'}/>
    </div>
  )
}