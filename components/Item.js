import React from "react";
import Cat_board from "./Cat_board";
import Cat_bowl from "./Cat_bowl";
import Cat_cut from "./Cat_cut";
import Cat_din from "./Cat_din";
import Cat_uten from "./Cat_uten";

function Item({
  isCat_boardOpen,
  isCat_bowlOpen,
  isCat_cutOpen,
  isCat_dinOpen,
  isCat_utenOpen,
}) {
  return (
    <div>
      <Cat_uten isCat_utenOpen={isCat_utenOpen} />
      <Cat_board isCat_boardOpen={isCat_boardOpen} />
      <Cat_bowl isCat_bowlOpen={isCat_bowlOpen} />
      <Cat_din isCat_dinOpen={isCat_dinOpen} />
      <Cat_cut isCat_cutOpen={isCat_cutOpen} />
    </div>
  );
}
export default Item;
