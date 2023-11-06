interface Props {
  name: string;
  onClick: () => void;
}

export default (props: Props) => {
  const { name, onClick } = props;

  return (
    <li>
      <a
        className="block transition duration-150 ease-in-out hover:text-red-800 focus:text-red-800 [&.active]:text-red-800"
        href="#!"
      >
        {name}
      </a>
    </li>
  );
};
