import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "公司晉升機會有哪些？",
        value: "公司晉升機會有哪些？"
    },
    { text: "性騷擾申訴去哪裡申訴？", value: "性騷擾申訴去哪裡申訴？" },
    { text: "公司電腦剛拿到應該注意什麼？", value: "公司電腦剛拿到應該注意什麼？" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
