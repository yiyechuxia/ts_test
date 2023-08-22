interface Props {
  id: number;
  name: string;
  children: string[];
}

type PickProps = Pick<Props, "id" | "name">;

let pp : PickProps = {
    id:1,
    name:"梁秀萍"
}
