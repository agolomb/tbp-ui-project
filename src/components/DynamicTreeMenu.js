import React, { Fragment, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AdjustIcon from "@mui/icons-material/Adjust";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

const dynamicTree = {
  label: "Root",
  nodeId: "0",
  children: [
    {
      label: "Parent A",
      nodeId: "1",
      children: [
        {
          label: "Child A1",
          nodeId: "2",
          children: [],
        },
        {
          label: "Child Parent A2",
          nodeId: "3",
          children: [
            {
              label: "Child A21",
              nodeId: "4",
              children: [],
            },
            { label: "Child A22", nodeId: "5", children: [] },
          ],
        },
      ],
    },
    {
      label: "Parent B",
      nodeId: "6",
      children: [
        { label: "Child B1", nodeId: "7", children: [] },
        { label: "Child B2", nodeId: "8", children: [] },
        {
          label: "Child Parent B3",
          nodeId: "9",
          children: [{ label: "Child Parent B31", nodeId: "10", children: [] }],
        },
      ],
    },
  ],
};

const DynamicTreeMenu = () => {
  const [clickedItemLabel, setClickedItemLabel] = useState("");
  const handleItemClick = (label) => {
    setClickedItemLabel(label);
  };
  return (
    <Fragment>
      <Row>
        <Col lg={6} className="bg-warning">
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Tree tree={dynamicTree} onClick={handleItemClick} />
          </TreeView>
        </Col>
        <Col lg={6} className="bg-info">
          <div className="right-area">
            {clickedItemLabel && (
              <Fragment>
                <h3>{clickedItemLabel}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at erat a nisl molestie ornare. Donec lacinia neque non ex
                  lacinia, eget suscipit justo pharetra. Vestibulum vitae porta
                  nisi, sit amet rutrum libero. Pellentesque a arcu massa. Morbi
                  id metus in magna aliquet fermentum eu non purus. Mauris
                  ultrices augue sit amet mi ultrices lobortis. Etiam ac felis
                  ipsum. Sed at ligula vestibulum, porta odio quis, eleifend
                  sapien. Curabitur vehicula rhoncus odio placerat pretium. In
                  ultricies, quam non viverra gravida, elit neque convallis
                  purus, in porttitor ipsum velit quis est. Sed venenatis felis
                  nisl, eu laoreet quam commodo id. Praesent.
                </p>
              </Fragment>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="bg-danger">
          {clickedItemLabel && <p>You are viewing: {clickedItemLabel}</p>}
        </Col>
      </Row>
    </Fragment>
  );
};

function Tree({ tree, onClick }) {
  return (
    <TreeItem
      nodeId={tree.nodeId}
      label={tree.label}
      endIcon={tree.children.length === 0 ? <AdjustIcon /> : null}
      onClick={() => onClick(tree.label)}
    >
      {tree.children.map((childTree) => (
        <Tree key={tree.nodeId} tree={childTree} onClick={onClick} />
      ))}
    </TreeItem>
  );
}
export default DynamicTreeMenu;
