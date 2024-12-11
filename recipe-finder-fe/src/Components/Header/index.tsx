interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <section className="w-full">
        <div className=" md:h-64 h-36  bg-cover sm:bg-cover bg-no-repeat bg-[url('../public/img/hero.jpg')] ">
          <h1 className="text-5xl sm:text-7xl font-sans font-semibold w-full text-center py-12 md:py-20 text-gray-900">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
}
