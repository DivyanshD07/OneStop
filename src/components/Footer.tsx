import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" flex flex-row justify-between footer text-end text-white py-6 mt-12">
      <div className="text-2xl ml-4">OneStop</div>
      <p className="flex justify-around text-center">&copy; OneStop {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer;
