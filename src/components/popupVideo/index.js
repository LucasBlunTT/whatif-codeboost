import Image from "next/image";
import { StylePopupVideo } from "./styles";

import IconPlay from "../../assets/play.svg"

export function PopupVideo({ label, thumb }) {
    return (
        <StylePopupVideo>
            <span>{label}</span>
            <button style={{ background: `url(${thumb}) no-repeat center center`, }}>
                <div>
                    <Image src={IconPlay} alt="Icon Play" />
                </div>
            </button>
        </StylePopupVideo>
    )
};
