import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Intel plans $20 bln chip manufacturing site in Ohio - Reuters",
            "description": "Intel Corp will invest $20 billion in two new plants in Ohio to make advanced chips, the company said on Friday, the first step to a \"mega-site\" that can accommodate eight chip factories costing $100 billion.",
            "url": "https://www.reuters.com/technology/intel-plans-new-chip-manufacturing-site-ohio-report-2022-01-21/",
            "urlToImage": "https://www.reuters.com/resizer/xcBf7lZeSLbBLo890breb0gz0k8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ORZXBO5JFBJJBLE3YD5GVJ2PEA.jpg",
            "publishedAt": "2022-01-21T10:29:00Z",
            "content": "WASHINGTON/SAN FRANCISCO, Jan 20 (Reuters) - Intel Corp will invest $20 billion in two new plants in Ohio to make advanced chips, the company said on Friday, the first step to a \"mega-site\" that can … [+2637 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": null,
            "title": "Netflix warning on subscriber growth sends stock plummeting - Financial Times",
            "description": "Sharp sell-off comes as investors dump shares in Peloton and other companies that prospered in the pandemic",
            "url": "https://www.ft.com/content/fea461d6-e3e0-4016-a641-fca87e59d019",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F7d1da3b9-ccec-45bb-bb35-9f2417e10de4.jpg?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2022-01-21T09:52:27Z",
            "content": "Netflix has warned that subscriber growth would slow substantially in early 2022, sending its stock tumbling 20 per cent in pre-market trading on Friday in the latest instance of investors dumping sh… [+4061 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Karishma Vanjani",
            "title": "Peloton CEO Calls Report Claiming the Company Is Halting Production False - Barron's",
            "description": "The report sent shares of Peloton into a free fall. The stock was rising early Friday.",
            "url": "https://www.barrons.com/articles/peloton-stock-price-production-halt-report-51642702799",
            "urlToImage": "https://images.barrons.com/im-471056/social",
            "publishedAt": "2022-01-21T09:47:00Z",
            "content": "Peloton co-founder and CEO John Foley said a media report that claimed the company was halting all production of its bikes and other connected-fitness products amid lower demand from consumers was fa… [+3288 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Rio Tinto shares slump as Serbia pulls plug on its $2.4 bln lithium project - Reuters",
            "description": "Shares in Rio Tinto tumbled on Friday after Serbia revoked its lithium exploration licences over environmental concerns, hurting the Anglo-Australian miner's ambition to become Europe's largest supplier of the metal used in electric vehicles.",
            "url": "https://www.reuters.com/markets/europe/rio-tinto-shares-take-hit-serbia-pulls-plug-24-bln-lithium-project-2022-01-21/",
            "urlToImage": "https://www.reuters.com/resizer/C2pAfOQXJr3LuQxRPMR2mg8aSU4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2JBOJPBEAJJ4ZN4TFWMQ2BKKZQ.jpg",
            "publishedAt": "2022-01-21T09:02:00Z",
            "content": "MELBOURNE, Jan 21 (Reuters) - Shares in Rio Tinto tumbled on Friday after Serbia revoked its lithium exploration licences over environmental concerns, hurting the Anglo-Australian miner's ambition to… [+4689 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Ghana blast: Many feared dead after huge explosion near Bogoso - BBC News",
            "description": "Videos show many destroyed buildings and scattered debris near the mining town of Bogoso.",
            "url": "https://www.bbc.com/news/world-africa-60074511",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DC52/production/_122920465_mediaitem122920461.jpg",
            "publishedAt": "2022-01-21T08:28:10Z",
            "content": "Media caption, Footage captures aftermath of deadly Ghana blast\r\nAt least 17 people have been killed in a huge explosion near a mining town in south-western Ghana, officials say.\r\nPolice say a vehicl… [+1523 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Harriet Alexander, Brian Marks, Martin Robinson",
            "title": "'It's a slap in the face': Adele fans flying into Vegas angry at cancelation 24 HOURS before show - Daily Mail",
            "description": "Adele shocked her fans on Thursday when she revealed in a tearful video that she had been forced to postpone her massively popular upcoming Las Vegas residency.",
            "url": "https://www.dailymail.co.uk/tvshowbiz/article-10424965/Adele-sobs-POSTPONES-Las-Vegas-residency-COVID-cases-crew-members.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/01/21/04/53194407-0-image-a-91_1642740887595.jpg",
            "publishedAt": "2022-01-21T08:27:01Z",
            "content": "A tearful Adele has axed her entire 24-date Caesars Palace residency at the 11th hour claiming half her team has Covid and they 'ran out of time' for the show to be ready.\r\nFans paying between $85 an… [+21771 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PhoneArena"
            },
            "author": "Daniel Petrov",
            "title": "Samsung to start Galaxy S22 preorder reservations with early bird bonuses - PhoneArena",
            "description": "The Galaxy S22, S22+, and S22 Ultra will be up for preorder reservations with discounts to be had for early adopters.",
            "url": "https://www.phonearena.com/news/samsung-galaxy-s22-preorder-reservations_id137945",
            "urlToImage": "https://m-cdn.phonearena.com/images/article/137945-wide-two_1200/Samsung-to-start-Galaxy-S22-preorder-reservations-with-early-bird-bonuses.jpg",
            "publishedAt": "2022-01-21T08:07:49Z",
            "content": "Samsung Galaxy S21, S21+, and S21 Ultra\r\n- get the S21 series with up to $700 trade-in, accessory credits, half-price financing, and exclusive colors."
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Erik Pedersen",
            "title": "Meat Loaf Dies: ‘Bat Out Of Hell’ Singer & ‘Rocky Horror Picture Show’ Actor Was 74 - Deadline",
            "description": "Meat Loaf, the hardworking singer and actor whose Bat Out of Hell is one of the best-selling albums ever and who played Eddie in The Rocky Horror Picture Show, has died. He was 74. The Grammy winner born Marvin Lee Aday died Thursday night surrounded by his w…",
            "url": "https://deadline.com/2022/01/meat-loaf-dead-bat-out-of-hell-rocky-horror-picture-show-1234917056/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/01/7pRiaDwE.jpeg?w=1024",
            "publishedAt": "2022-01-21T07:44:00Z",
            "content": "Meat Loaf, the hardworking singer and actor whose Bat Out of Hell is one of the best-selling albums ever and who played Eddie in The Rocky Horror Picture Show, has died. He was 74.\r\nThe Grammy winner… [+4435 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Ukraine tension: Urgent US-Russia talks in Geneva as invasion fears grow - BBC News",
            "description": "The top US and Russian diplomats will meet in Geneva as fears of an invasion of Ukraine grow.",
            "url": "https://www.bbc.com/news/world-us-canada-60077776",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/178C4/production/_122925469_gettyimages-1237834830-1.jpg",
            "publishedAt": "2022-01-21T06:59:16Z",
            "content": "Image source, Getty Images\r\nImage caption, Some US politicians have called on President Biden to airlift weapons to Ukrainian forces\r\nUS Secretary of State Antony Blinken and Russian Foreign Minister… [+4412 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "David Aaro",
            "title": "Maryland authorities find more than 100 snakes in dead man's home - Fox News",
            "description": "A man was found dead in his Maryland home this week with more than 100 venomous and non-venomous snakes, authorities said.",
            "url": "https://www.foxnews.com/science/maryland-authorities-100-snakes-dead-mans-home",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/01/iStock-175502521-1.jpg",
            "publishedAt": "2022-01-21T06:42:49Z",
            "content": "A man was found dead in his Maryland home this week with more than 100 venomous and non-venomous snakes, authorities said. \r\nThe man, whose name was not immediately released, was found dead Wednesday… [+2391 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Dan Wetzel",
            "title": "Beijing Olympics: 'Everyone is just worried about getting there' - Yahoo Sports",
            "description": "How an Omicron outbreak could crumble the Beijing Olympics.",
            "url": "https://sports.yahoo.com/beijing-olympics-everyone-is-just-worried-about-getting-there-035417527.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/fW0cSJ9UT_wRa7R_NrTQew--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Mzc-/https://s.yimg.com/os/creatr-uploaded-images/2022-01/cf863ae0-7a6c-11ec-adf3-e1ba2bb08016",
            "publishedAt": "2022-01-21T03:54:00Z",
            "content": "NBC's broadcasters will call the Winter Olympics remotely from Connecticut rather than in person in China. ESPN has bailed on sending even a single reporter citing a \"very challenging\" environment in… [+5877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Niners Nation"
            },
            "author": "Kyle Posey",
            "title": "NN prediction contest, Divisional Round: Can the 49ers make it three upsets in a row? - Niners Nation",
            "description": "Jimmy Garoppolo’s record as an underdog would suggest so",
            "url": "https://www.ninersnation.com/2022/1/20/22894298/nn-prediction-contest-divisional-round-can-the-49ers-make-it-three-upsets-in-a-row",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/DWnhkvQploHiSDVrQK1Ya2ivj6A=/0x0:4192x2195/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23183792/1365765427.jpg",
            "publishedAt": "2022-01-21T03:40:38Z",
            "content": "Weve reached the Divisional Round of the playoffs. Click here for a look at the Wild Card round results. \r\nThe 49ers took care of the Cowboys last week. As usual, they made it interesting but found a… [+901 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Lindsay Weinberg",
            "title": "Artem Chigvintsev Leaving Dancing With the Stars Tour Over \"Unexpected Health Issues\" - E! NEWS",
            "description": "Artem Chigvintsev is leaving the Dancing With the Stars tour after experiencing some \"unexpected health issues.\" Read on for his full statement.",
            "url": "https://www.eonline.com/news/1317105/artem-chigvintsev-leaving-dancing-with-the-stars-tour-over-unexpected-health-issues",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022020/rs_1200x1200-220120192804-1200-Artem-Chigvintsev.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2022-01-21T03:37:00Z",
            "content": "Artem Chigvintsev is bowing outfor now.\r\nThe professional dancer, 39, shared that he is leaving the Dancing With the Stars tour due to a medical issue.\r\n\"My time on tour so far has been wonderful,\" h… [+721 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Marshall Cohen, Zachary Cohen and Dan Merica, CNN",
            "title": "Trump campaign officials, led by Rudy Giuliani, oversaw fake electors plot in 7 states - CNN",
            "description": "Trump campaign officials, led by Rudy Giuliani, oversaw efforts in December 2020 to put forward illegitimate electors from seven states that Trump lost, according to three sources with direct knowledge of the scheme.",
            "url": "https://www.cnn.com/2022/01/20/politics/trump-campaign-officials-rudy-giuliani-fake-electors/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210827144803-trump-giuliani-2-super-tease.jpg",
            "publishedAt": "2022-01-21T02:58:00Z",
            "content": "Listen to Meshawn Maddock describe the Trump campaign's involvement in the fake elector plot at a recent speech in Michigan \r\n\"[Matt Maddock] fought for investigations into every part of the election… [+574 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WTOP"
            },
            "author": "Jose Umana",
            "title": "Va. AG Miyares files motion to dismiss parents' lawsuit against Youngkin's mask mandate order - WTOP",
            "description": "Virginia Attorney General Jason Miyares filed a motion with the Supreme Court of Virginia Thursday looking to dismiss a lawsuit looking to block Gov. Glenn Youngkin’s executive order ending mask mandates.",
            "url": "http://wtop.com/virginia/2022/01/va-ag-miyares-files-motion-to-dismiss-parents-lawsuit-against-youngkins-mask-mandate-order/",
            "urlToImage": "https://wtop.com/wp-content/uploads/2022/01/AP21244708022798-scaled.jpg",
            "publishedAt": "2022-01-21T02:55:17Z",
            "content": "Virginia Attorney General Jason Miyares filed a motion with the Supreme Court of Virginia Thursday looking to dismiss a lawsuit looking to block Gov. Glenn Youngkin’s executive order ending mask mand… [+1580 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Linda Qiu",
            "title": "Fact-Checking McConnell’s Comparison of Black Turnout Rates - The New York Times",
            "description": "The Republican leader’s claim about high voter turnout in previous elections wasn’t too far off base, but that doesn’t mean voting access is assured.",
            "url": "https://www.nytimes.com/2022/01/20/us/politics/fact-check-mcconnell-black-turnout.html",
            "urlToImage": "https://static01.nyt.com/images/2022/01/20/us/politics/20dc-fact-check/merlin_200637705_c8dded7c-b177-4f47-9f39-c6b50cf9911d-facebookJumbo.jpg",
            "publishedAt": "2022-01-21T02:52:18Z",
            "content": "A spokesman for Mr. McConnell also cited Census Bureau demographic data on voter turnout for the past four federal elections. In the 2020 election, for example, 62.6 percent of eligible Black America… [+2435 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Blazer's Edge"
            },
            "author": "Adrian Bernecich",
            "title": "Former Blazers Assistant David Vanterpool Fined For Interfering In Game - Blazer's Edge",
            "description": "The veteran coach has been stung with a fine after stepping in during the Nets’ January 19 win.",
            "url": "https://www.blazersedge.com/2022/1/20/22894177/david-vanterpool-brooklyn-nets-fined-portland-trail-blazers-washington-wizards-interfering",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/8kyrg_l023DFsrXYrpSIkIwKs84=/0x0:5184x2714/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23183471/1139162008.jpg",
            "publishedAt": "2022-01-21T01:57:56Z",
            "content": "The NBA has fined Brooklyn Nets assistant coach David Vanterpool after he interfered in game play during the teams win against the Washington Wizards on January 19. \r\nThe former long-term Portland Tr… [+760 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "Tom Brady isn’t thinking about avenging regular-season loss to Rams - NBC Sports",
            "description": "Since Tom Brady arrived in Tampa Bay, the Bucs have gone 0-2 against the Rams in the regular season. They meet for the first time in the postseason on Sunday.On Thursday, Brady was asked about his team’s ability to “avenge” regular-season losses in the playof…",
            "url": "https://profootballtalk.nbcsports.com/2022/01/20/tom-brady-isnt-thinking-about-avenging-regular-season-loss-to-rams/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/01/GettyImages-1235566395-e1642727579881.jpg",
            "publishedAt": "2022-01-21T01:13:00Z",
            "content": "Since Tom Brady arrived in Tampa Bay, the Bucs have gone 0-2 against the Rams in the regular season. They meet for the first time in the postseason on Sunday.\r\nOn Thursday, Brady was asked about his … [+1475 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KCRA Sacramento"
            },
            "author": "Heather Waldman",
            "title": "Pressure wave from Saturday's Tonga volcano eruption captured on camera in the sky above Hawaii's Maunakea - KCRA Sacramento",
            "description": "The powerful underwater eruption triggered a tsunami that swept the Pacific, but it also created a visible \"wave\" in the atmosphere that circled the globe several times.",
            "url": "https://www.kcra.com/article/pressure-wave-tonga-volcano-eruption-captured-on-camera/38831943",
            "urlToImage": "https://kubrick.htvapps.com/vidthumb/c60e9fcc-a87e-4977-b3d9-8ff5bfce51dc/thumb_640x360_00002_1642709407_80190.jpg?crop=1xw:1xh;center,top&resize=1200:*",
            "publishedAt": "2022-01-21T01:02:00Z",
            "content": "News about the massive volcanic eruption near Tonga in the west Pacific continues to make waves around the world thanks to science and social media. \r\nOn Wednesday, the Gemini Observatory, part of th… [+2106 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Mike Levine",
            "title": "FBI raid on House Democrat's home related to Azerbaijan probe, source says - ABC News",
            "description": "",
            "url": "https://abcnews.go.com/US/fbi-raid-house-democrats-home-related-azerbaijan-probe/story?id=82384118",
            "urlToImage": "https://s.abcnews.com/images/US/Cuellar-ht-er-220120_1642719716613_hpMain_16x9_992.jpg",
            "publishedAt": "2022-01-21T00:34:57Z",
            "content": "The FBI on Wednesday raided Democratic Congressman Henry Cuellar's home and campaign office in Texas as part of a wide-ranging federal probe relating to the former Soviet state of Azerbaijan and seve… [+1240 chars]"
        }
    ]

    constructor() {
        super();
        console.log("Hello, I am a constructor from News component!");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=417d38add7a74c0bbc957dbb470839ab&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false

        })

    }

    handlePrevClick = async () => {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=417d38add7a74c0bbc957dbb470839ab&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=417d38add7a74c0bbc957dbb470839ab&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>}
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>



            </div>
        );
    }
}

export default News;
