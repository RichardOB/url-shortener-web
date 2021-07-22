import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <main className={"row " + classes.main}>{props.children}</main>
      {/* <main className="row">{props.children}</main> */}
    </div>
  );
}

export default Layout;
