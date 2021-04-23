const ServicesShown = ({ currentPage, pageSize, total }) => {
  return (
    <span
      style={{
        font: "2rem montserrat",
        fontWeight: "700",
        textAlign: "center",
        padding: "1rem",
        color: "rgb(0, 150, 140)",
      }}
    >
      Showing {total !== 0 ? currentPage * pageSize - (pageSize - 1) : 0} -{" "}
      {currentPage * pageSize > total ? total : currentPage * pageSize} out of{" "}
      {total} services.
    </span>
  );
};

export default ServicesShown;
