import React from 'react';
import Card from '../../components/Card';
function Maps() {
    return (
        <>
            <div id="popular-maps" className="container my-5 text-light">
                <div className="row mb-2">
                    <h1 className="border-bottom text_color_danger font_primary">Popular Maps</h1>
                </div>
                <div className="row mt-5">
                <Card imgSrc="https://cdn.oneesports.gg/cdn-data/2023/01/Valorant_Lotus_Episode6ActI_Map.jpg" title="Lotus" href="https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-6-07/" description="Each map is a playground to showcase your creative thinking. Purpose-built for team strategies.Each map is a playground to showcas" />

                <Card imgSrc="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltee14888179d221f8/5ee7d51725b4740c330ba55d/Loading_Screen_Split_v2.jpg" title="Split" href="https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-6-05/" description="Each map is a playground to showcase your creative thinking. Purpose-built for team strategies.Each map is a playground to showcas" />

                <Card imgSrc="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0c118364c6320f60/62a289d3891af05acaff06b1/Pearl_Gallery_01.jpg?auto=webp&width=915" title="Pearl" href="https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-6-05/" description="Each map is a playground to showcase your creative thinking. Purpose-built for team strategies.Each map is a playground to showcas" />

                <Card imgSrc="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1a720126e3713bba/6131bf518e16ab655b34901a/Fracture_Screenshot-8.jpg?auto=webp&width=915" title="Fracture" href="https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-6-05/" description="Each map is a playground to showcase your creative thinking. Purpose-built for team strategies.Each map is a playground to showcas" />

                </div>

            </div>

        </>
    )
}
export default Maps;