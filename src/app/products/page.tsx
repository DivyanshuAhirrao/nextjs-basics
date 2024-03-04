import { Fragment } from "react";

export default function Products() {
  return (
    <>
      <ul>
        <h1> Products : </h1>
        <h3 className="text-emerald-400">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
            return (
              <Fragment key={i}>
                <li style={{ listStyleType: "none" }}>
                  <a
                    href={`http://localhost:3001/products/${e}/reviews/${e}`}
                    style={{ color: "slateblue" }}
                  >
                    Product {e}
                  </a>
                </li>
              </Fragment>
            );
          })}
        </h3>
      </ul>
    </>
  );
}
