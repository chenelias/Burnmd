import ReactMarkdown from 'react-markdown'
import '../index.css'

function Editor(props) {
    var mdinput = props.mdinput
    var setmdinput = props.setmdinput
    const toggleinput = (x) => {
        var y = x.target.value
        setmdinput(y)
    }
    return (
        <div className="mdeditor">
            <textarea
                placeholder="Type some Markdown code here."
                className="mdinputarea"
                style={{
                    background: props.togglecolormode ? '#191e2a' : '#fff',
                    color: props.togglecolormode ? '#fff' : '#000',
                    border: props.togglecolormode ? '3px solid #fff' : '3px solid #000',
                }}
                name="input"
                onChange={toggleinput}
            ></textarea>
            <p style={{ fontSize: props.togglemdfontsize }}>
                <ReactMarkdown style={{ fontSize: 20 }} className="mddisplay">
                    {mdinput}
                </ReactMarkdown>
            </p>
        </div>
    )
}

export default Editor
