const Channels = ({ WholeData, deleteMassage }) => {
  let filtered = [...new Set(WholeData.map((e) => e.user_massage))];
  return (
    <div>
      {WholeData.map((value) => {
        return (
          <div id="Channel" key={value.id}>
            <h4 style={{ textAlign: "left" }}>
              From {value.user_author} says:
              <p className="text-muted">{value.user_massage}</p>
            </h4>{" "}
            <button
              type="button"
              style={{ textAlign: "right" }}
              className="btn btn-outline-danger"
              onClick={() => {
                deleteMassage(value.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      {filtered.map((ele) => {
        <h1>{ele}</h1>;
      })}
    </div>
  );
};

export default Channels;
