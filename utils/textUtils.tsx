type Props = {
    text?: string;
}

const NewlineText = ({ text }: Props) => {
    if (!text) {
        return null;
    }

    const newText = text.split("\n").map((str, key) => <p key={key}>{str}</p>);

    return <>{newText}</>;
};

export default NewlineText;
