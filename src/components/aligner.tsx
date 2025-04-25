import "../style/aligner.css";

export interface IAlignerProps {
    children?: React.ReactNode,
    background?: string,
    justify?: string, 
    direction: string
}

function Aligner(props: IAlignerProps) {
    if (props.justify){
        if (props.background) {
            return (
                <div className={props.background + " aligner " + props.direction + " " + props.justify}>
                    {props.children}
                </div>
            )
        } else {
            return (
                <div className={"aligner " + props.direction + " " + props.justify}>
                    {props.children}
                </div>
            )
        }
    } else {
        if (props.background) {
            return (
                <div className={props.background + " aligner " + props.direction}>
                    {props.children}
                </div>
            )
        } else {
            return (
                <div className={"aligner " + props.direction}>
                    {props.children}
                </div>
            )
        }
    }
}
export default Aligner;