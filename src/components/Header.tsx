
import Link from "next/link"
export default function Header(){
    return(
        <div>
    <ul className="flex gap-10 bg-blue-700 text-white">
      
  <li> <Link href="/">Home</Link></li>
  <li> <Link href="/about">About</Link> </li>
  <li><Link href="/contact">Contact us</Link></li>
  <li><Link href="/jobs"> Jobs</Link></li>
  <li><Link href="/portfolio"> Portfolio</Link></li>
  </ul>
   <img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/next-js-image-component.png"></img>
   </div>
    );
}