export const getTarrifs = () => {
  const tarrifs = {
    super: [
      {
        mb: "2000",
        level: "Social, Maps(other usage will be charged by 2)",
        price: "20",
      },
      {
        mb: "3000",
        level: "Social, Maps, music(other usage will be charged by 2)",
        price: "25",
      },
      {
        mb: "4500",
        level: "Social, Maps, music, games(other usage will be charged by 2)",
        price: "35",
      },
      {
        mb: "7000",
        level: "Social, Maps, music, games(other usage will be charged by 2)",
        price: "50",
      },
      {
        mb: "10000",
        level:
          "Social, Maps, music, games, video(other usage will be charged by 2)",
        price: "70",
      },
      {
        mb: "17000",
        level:
          "Social, Maps, music, games, video(other usage will be charged by 2)",
        price: "100",
      },
      {
        mb: "25000",
        level:
          "Social, Maps, music, games, video(other usage will be charged by 2)",
        price: "140",
      },
    ],
    units: [
      {
        unit: "0",
        mins: "0",
        price: "0",
      },
      {
        unit: "100",
        mins: "25",
        price: "5",
      },
      {
        unit: "300",
        mins: "75",
        price: "10",
      },
      {
        unit: "500",
        mins: "125",
        price: "15",
      },
      {
        unit: "1000",
        mins: "250",
        price: "25",
      },
      {
        unit: "2000",
        mins: "500",
        price: "40",
      },
      {
        unit: "4000",
        mins: "1000",
        price: "70",
      },
    ],
  };

  return tarrifs;
};
