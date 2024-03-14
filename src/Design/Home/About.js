import React from 'react';
function About() {
    return (
        <>
            <div id="about" class="container p-md-5 p-2 p-lg-3 my-5 text-light">
                <div class="row align-items-center">
                    <div class="col-lg-6 font_secondary">
                        <h1 class="text_color_danger font_primary my-2 my-md-4">About Us</h1>
                        <p>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>

                    </div>
                    <div class="col-lg-6 ">
                        <div className='ratio ratio-16x9 mt-md-4 mt-4'>
                            <iframe class="mx-auto w-100 h-100 " src="https://www.youtube.com/embed/CZdftlOD_jU?mute=1&loop=1&controls=0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;