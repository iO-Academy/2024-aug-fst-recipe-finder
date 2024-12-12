
interface RecipeCardProps {
    name: string;
    time: number;
  }
  
  export default function RecipeCard({ name, time }: RecipeCardProps) {
    return (
      <>
        <div className="flex w-10/12 shadow-md py-8 mx-auto justify-center md:justify-between md:px-20 bg-white rounded-md my-3 md:py-12 md:text-3xl lg:py-10 lg:w-7/12">
          <h2 className="mr-9 ">{name}</h2>
          <div className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 md:w-7"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
            </span>
            <p className="ml-3">{time} mins</p>
          </div>
        </div>
      </>
    );
  }
  