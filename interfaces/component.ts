export interface Component{}

export interface MainNavComponent extends Component {
    getLabel(): string;
    setLabel(label: string);

    getPath(): Array<string>;
    setPath(path: string | Array<string>);
}