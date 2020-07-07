# CNN CLASSIC - FEAR & GREED INDEX - 7 Sentiment Indicators
> https://money.cnn.com/data/fear-and-greed/

* The McClellan Volume Summation Index 
* Put and Call Options
* Stock Price Strength
* Market Volatility
* Market Volatility
* Junk Bond 
* Safe Haven Demand

# ALTERNATIVE CRYPTO - FEAR & GREED INDEX - 6 Sentiment Indicators
> https://alternative.me/crypto/fear-and-greed-index/#

* Volatility (25 %)
* Market Momentum/Volume (25%)
* Social Media (15%) - Twitter
* Surveys (15%) - strawpoll
* Dominance (10%)
* Trends (10%)

> API: https://api.alternative.me/fng/?limit=10&format=csv&date_format=us

> What could be added / substracted ?

```javascript
GET https://api.alternative.me/fng/?limit=2

Response
{
	"name": "Fear and Greed Index",
	"data": [
		{
			"value": "40",
			"value_classification": "Fear",
			"timestamp": "1551157200",
			"time_until_update": "68499"
		},
		{
			"value": "47",
			"value_classification": "Neutral",
			"timestamp": "1551070800"
		}
	],
	"metadata": {
		"error": null
	}
}
```

# THE MODERN FEAR & GREED INDEX - 9 Sentiment Indicators
> https://www.liberatedstocktrader.com/fear-and-greed-index/

# CODE in PYTHON
> https://www.quantopian.com/posts/how-to-recreate-the-cnn-fear-and-greed-index
