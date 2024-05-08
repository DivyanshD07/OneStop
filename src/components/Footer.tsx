import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-row justify-around footer text-end text-white mt-12">
      <div className="text-4xl font-bold ">LastStop</div>
      <p className="flex justify-around text-center">&copy; OneStop {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer;
