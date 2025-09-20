import "./story.css"

export const Story = () =>{
    return<>
    <div className="P1" id="bg">
        <div className="Chr">
            <div class="dialog">
                <p>Howdy. My name is John Miller, and I'm 58 years old, though<br/> some days I feel a lot older after a long day in the fields.<br/>
                 I'm a third-generation corn farmer, and my family's roots<br/> run as deep as the stalks of corn we grow right here in Iowa.<br/>
                  This farm isn't just a business. <br/>it's been my family's lifeblood for as long as I can remember. 
                    <br/>
                    <audio controls>
                    <source src="./farmer1 voice.wav" type="audio/mpeg" />
                    Your browser does not support audio.
                    </audio>
                </p>
                
            </div>

            <img src="./farmer1.png" alt="farmer" />
        </div>

    </div>

    <div className="P2" id="bg">
    <div className="Chr2">
        <img src="./farmer2.png" alt="farmer" />
            <div class="dialog2">
                <p>I don't even know what to say. For three generations, my family has worked this land, <br/>
                    and we've faced everything—drought, floods, tornados—and we always bounced back. But this... this ain't natural.<br/> 
                    One day, my corn was standing tall, almost ready for harvest. The next, the sky just opened up with something <br/>
                    strange they call 'space weather,' and it was all gone. Twisted, brittle stalks as far as the eye can see, <br/>
                    like something just sucked the life right out of them. <br/>
                    My life's work, my family's legacy, just... vaporized. How do you prepare for something like that?
                    <br/>
                    <audio controls>
                    <source src="./farmer2 voice.wav" type="audio/mpeg" />
                    Your browser does not support audio.
                    </audio>
                </p>
                
            </div>
        </div>
    </div>

    <div className="P3" id="bg">
    <div className="Chr3">
        <img src="./scientist1.png" alt="scientist" />
            <div class="dialog3">
                <p>John, I understand this heat feels impossible. 
                    What's happening is that our atmosphere is like a thickening blanket, <br/>
                    trapping the sun's energy down here on Earth. That's a direct result of the<br/>
                     greenhouse gases we've been releasing. To get through these days, <br/>
                     you need to stay hydrated and seek shelter. But to stop this from happening <br/>
                    to your crops again, we've got to work on fixing our planetary blanket. <br/>
                    It's science, but it's also about saving your livelihood. 
                    <br/>
                    <audio controls>
                    <source src="./sci1.wav" type="audio/mpeg" />
                    Your browser does not support audio.
                    </audio>
                </p>
                
            </div>

            <img src="./farmer3.png" alt="farmer" />
        </div>
    </div>
    </>
}