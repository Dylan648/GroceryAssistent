'use client';

function Button(props: {text: string}) {
    return (
        <div className="bg-black w-32 h-11 rounded-3xl flex items-center justify-center">
            <button className="text-white text-center p-2" onClick={handleClick}>{props.text}</button>
        </div>
    )

    function handleClick() {
        alert('clicked!')
    }
}

export default Button;