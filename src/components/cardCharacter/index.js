import Link from "next/link";
import { StyleCard } from "./styles";

import ImageCharacter from "../../assets/character.jpg";
import Image from "next/image";

export function CardCharacter() {
    return (
        <StyleCard>
            <Link href='#'>
                <div className="image">
                    <Image
                        src={ImageCharacter}
                        alt="character"
                    />
                </div>
                <div className="info">
                    <div>
                        <h3>T’Challa</h3>
                        <span>What if</span>
                    </div>
                    <span>
                        Marvel Studios
                    </span>
                </div>
            </Link>
        </StyleCard>
    );
}