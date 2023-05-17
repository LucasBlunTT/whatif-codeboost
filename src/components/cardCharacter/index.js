import Link from "next/link";
import { StyleCard } from "./styles";
import Image from "next/image";

export function CardCharacter({ image, name, slug }) {
    return (
        <StyleCard>
            <Link href={`/character/${slug}`}>
                <div className="image">
                    <Image width="280" height="568"
                        src={image}
                        alt="character"
                    />
                </div>
                <div className="info">
                    <div>
                        <h3>{name}</h3>
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