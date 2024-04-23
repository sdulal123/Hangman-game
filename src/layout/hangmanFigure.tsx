const HEAD = (
    <div
        style={{
            top: "50px",
            width: "50px",
            right: "-30px",
            height: "50px",
            position: "absolute",
            borderRadius: "100%",
            border:"10px solid black"
        }}
    />
)

const BODY = (
    <div
        style={{
            right: 0,
            top: "120px",
            width: "10px",
            height: "100px",
            background:"black",
            position: "absolute"
        }}
    />
)
const RIGHT_ARM = (
    <div
        style={{
            top: "150px",
            width: "100px",
            height: "10px",
            right: "-100px",
            rotate: "-30deg",
            background:"black",
            position: "absolute",
            transformOrigin: "left bottom"
        }}
    />
)
const LEFT_ARM = (
    <div
        style={{
            top: "150px",
            right: "10px",
            width: "100px",
            height: "10px",
            rotate: "30deg",
            background:"black",
            position: "absolute",
            transformOrigin: "right bottom"
        }}
    />
)

const RIGHT_LEG = (
    <div
        style={{
            top: "210px",
            right: "-90px",
            width: "100px",
            height: "10px",
            rotate: "60deg",
            background:"black",
            position: "absolute",
            transformOrigin: "left bottom"
        }}
    />
)
const LEFT_LEG = (
    <div
        style={{
            right: 0,
            top: "210px",
            width: "100px",
            height: "10px",
            rotate: "-60deg",
            background:"black",
            position: "absolute",
            transformOrigin: "right bottom"
        }}
    />
)


export function  HangmanFigure() {
    return (
        <div style={{position: "relative"}}>
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}
            <div 
                style={{
                    top: 0, 
                    right: 0,
                    width: "10px", 
                    height: "50px", 
                    position:"absolute", 
                    background: "black", 
                }}/>
            <div 
                style={{
                    width: "200px", 
                    height: "10px", 
                    background: "black", 
                    marginLeft: "120px"
                }}/>
            <div 
                style={{
                    width: "10px", 
                    height: "400px", 
                    background: "black", 
                    marginLeft: "120px"
                }}/>
            <div 
                style={{
                    height: "10px", 
                    width: "250px", 
                    background: "black"}}/>
        </div>
    )
}