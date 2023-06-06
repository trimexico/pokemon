import React from "react";
import { SpanCustom } from "../SpanCustom/SpanCustom";
import "./Item.css";
export const Item = ({ id, img, name, types }) => {
  return (
    <li className="card ">
      <img src={img} alt="" className={types[0].type.name} />
      <div className="content ">
        <h3>
          {id}
          {name}
        </h3>
        <div className="card__types">
          {types.map((item, index) => {
            return (
              <SpanCustom key={index} color={item.type.name}>
                {item.type.name}
              </SpanCustom>
            );
          })}
        </div>
      </div>
    </li>
  );
};
