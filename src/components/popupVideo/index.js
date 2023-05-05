import Image from "next/image";
import { StylePopupVideo } from "./styles";

import IconPlay from "../../assets/play.svg"

export function PopupVideo() {
    return (
        <StylePopupVideo>
            <span>ASSISTA AO TRAILER</span>
            <button>
                <div>
                    <Image src={IconPlay} alt="Icon Play" />


                </div>
            </button>
        </StylePopupVideo>
    )
};
