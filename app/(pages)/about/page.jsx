const AboutPage = () => {
  return (
    <main className="flex justify-center flex-col">
      <div className="container mx-auto p-6 mt-24">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-3xl xl:text-6xl font-bold mb-8">
              About Color<span className="text-red-600">Tailor</span>
            </h1>
            <p className="text-sm xl:text-lg text-gray-800 leading-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              numquam magnam excepturi, tempora porro laudantium consectetur sit
              non, praesentium omnis architecto voluptas nostrum amet pariatur
              explicabo vitae saepe cupiditate. Officiis laboriosam neque
              itaque, eum praesentium illo perferendis maiores beatae ratione
              consequatur doloremque autem repudiandae! Earum atque vero,
              quisquam consequatur non odit cum asperiores consequuntur alias ad
              quis, provident numquam. Vel, saepe quae possimus praesentium
              molestias officiis eos ipsam, quam ab corrupti modi fugit quo
              quisquam.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://placehold.co/600"
              width={600}
              height={600}
              alt="About Image"
              className="rounded"
              loading="lazy"
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
