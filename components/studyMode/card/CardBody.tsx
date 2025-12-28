import CardActions from "./CardActions";
import CardContent from "./CardContent";

function CardBody() {
  return (
    <div className="space-y-5 px-4 py-6 md:p-5">
      <CardContent />
      <CardActions />
    </div>
  );
}

export default CardBody;
