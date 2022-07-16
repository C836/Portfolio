export interface Config{
    text: string;
    colored?: boolean;
    transparent?: boolean;
    alt?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
