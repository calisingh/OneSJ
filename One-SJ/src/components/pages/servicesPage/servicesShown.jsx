const ServicesShown = ({ currentPage, pageSize, total }) => {
  return (
    <span className="servicesShown">
      Showing {total !== 0 ? currentPage * pageSize - (pageSize - 1) : 0} -{" "}
      {currentPage * pageSize > total ? total : currentPage * pageSize} out of{" "}
      {total} services
    </span>
  );
};

export default ServicesShown;
