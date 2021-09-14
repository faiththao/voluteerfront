export default function Home() {
    return (
        <div className="home">
        <h1>•Home•</h1>
        <body className="body">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAABLFBMVEX///+w2IHycHNfXV32mHKogbpygbr/6W5ZV1dcWlpWVFRQTU1TUVHu7e2t13yfnp5ycHDybG9iYGCNjIzf39+trKzHxsZIRUWYl5eCgID5+fm8vLzU67p4d3es1nm+vb1samrY19fo6Og/PDz/6GT1kGbxZGfWxd6hdrWysbH3mpxre7f/8ZqUk5OKiYnZ2dnh8ND+6OiapM36/fbe78u73pL2j5H5spf6v8DC4Z7X68DM5q7q9d780tP6urv1hIb/8+770cH3nXj6vabi1ui3l8b83dLe4e6yutj/8qjGzOL/+M3/++Lz+uz4o6T5sbL4pYT+6uKvi8DEq9C+ocz/63jPu9n/9b1+jMHh1Of93d70fH76uqL918qTaK1ecLL/7Ye5wNv/8aOQnMgIQfw2AAAYH0lEQVR4nO2ciVvTStfAB8rSNC3dWxoodKGVWikK4opeXHFD0etVr977qq/////wzTmTZJbMZIEUX/g4zyOmabZfzpmzzFJCfrOszuwduZtH9+7t/tZnmbbcX5tZWmKI19eW1pZ+8+NMVY7WZmZmllZxe49vXky5tzQDgtvC5sWUVSRkxgtKnlljJr16997vfKzpCNPsGm4z2H3Y3KPNd++3Ptg05CYjBH+8i5tLNwm4Kth54ZrvPlenCwuIzLgvnGoZ7BI0UBf2LvGM+8KFIZfwvr+J+hRb8kUSTujCgj5vXlBYFlyBy4WFzetrFxN2b8Zzxx7s7sWFvcss9jqHPbq4sPeXfHfMYS9qm3XzRQg4bvPdv7Chx1Ui5v9sAyx6VQN7feb8Z1T73C2x5gv54v1gAUTzyrWbv+sh0xIPdt/X5z0dLDvstz1lSnLkphKrng+G5ntXhd29IO6ZwQKZq+QZL/gKhcDekufFzre4rNSOj/zYM6PArgql7rkW12SpQq/7Fr0kw+7zeuicy6oHu+ZtLB2tybAzfrZx3uW612i5rMlmfJfnHeddjoKwnrAD7vPgdO5l1wjL8FYVPZ9vMWt26d7+/l33a8giL4AYWSntmue1li6GYsNgBZO+ICNesVgvhhF7Zez/D9YQB+WzXphxn5A468vvfsbURJNBKXJux2yDTvVuZJs9l7nT/v2ZtbW1PXneRAwrPocVwNGemyAsSf5mL7rFnj/YVUGDazOeYe7PxAk85w12VbbWtb3V6/vXV/dieOKzaLN3HhLy7mFaVwu2TJr2rsXQ6pnA3hkOb70dDt+mdLndmbUlKvHgArDTzp+ulmfL5dnZ4YO0Lrh/7/7du3trsez2rGH/oKQoKV/35gnUO31Yl3V4h35w3l69kdqV7yZW7tTbrK9ZUO23cnmYHu3NpLRTh73lwQ6/khvD2dnyt/SuvZ+Qdupx9qoHW35LnCFAp6fapLRT76V455vxLLPp8p0Urx5d6UiwKd5ZK3d8WKrSh2XUcIqSrN2meWedPBh6sFSl8KF8K9XrJ6Cd/lDADQ57y/2Q7g324yaLbPrbVMXxYWeHhAzZf6nKbrwqwJ2nOl3hDoqmjLO+O77zLb22uxqP9gw6KnhWUb6KUZelycPyMLVSiBzFqWbPon/8raBa/FBGyGG6jfd+HOWmeD+DPBTtGGPPVdj9Ld30guxHFgbT909i7KH++EHZc8fUoFNNL6ILg7MYDeCxh9JiDTQ8IJhZpZte4Nql39xkRXfMvTLLrP5I+U67eyG0ZzO74K1Kixr9Okw/4oZ2lJ/NmNbXoaraMmHWnaqHYmLuPT6jWW3fAnb8lWVW5dQ6pnwxjguc1RyZO1o7Bth36d/MpNozyBVRDgJ2PGQ7Uy6AUFYNrfbMRgP+CKj2DmvJ6Xsob7Xl72qyUhLlCds3BQ9l0uyZjUNr/PE3T8Npy30D7JnNCHICsB7z1dTvddawB1+/KuZpYJ1NfZzgjGFvvC0PQf4QLTSQRPlu+SDyggfHc+8T3N8EO402+3Xod4rPcvU+MNlxjPGu47nBI7Z1e/Ak+gHO0kGJOoREiYm50UamFe8Hc4MD3LpNt5zIBzjL0PNgOJQ6nVz5wwA7axoMObjtqXNu7jFuPB/Mzd2OfgBTt/lUCjznwVWOO/QUd9XYaA26ejxgiM7As+K5OU/FoWIaEZlaBvWw7A/wfGMN18RqarQHA1efjzwr/odR/zuIIDZVAlPsWnzH/dTVrzceBOqeqEZLYedw4/Hc3DH8T5su4AP789A7m+aTT7MQuOHnw2WxFcdttGC98P9714odMOLnwOq+BLMYHNTSVOdo3gpDFOz4QHu220D/mWMemCqYahhYB1FB11DjJe9bLPwNfw/jHRyP1pAeP54b/IsKRg98DIp9j6yRodaQVSQv3uc3rxDybPNTvKNj0RrS42OkfDIHVnwArHPH/w7m3AYcKmllFYeb888o8fwHunklNVrtqdRuB7dvD5AS/9LP8Cc6qzCNYSbNKgqbwDk/v0nI5uafMU4whldBeJ4lyIELqEhkgyUhgTZhVuFsAieFLTiIHYPWlCcKmtWNb/2jZ30U45apBVoKW4A/h/TPfKwz3kbSljVd5XrFDmJki+ZAm7jf+MP85lPQ7NPYsDS9iLTj4El6xUY7J5S0Au2z+flPAPs3iWnGBGZqJm60jr7FRjsnFIMzThxo/5yf/0iJN6/4bfZw8++ok4zFrGfHgUj7SAM7OI7Jauw5TtpX8WmeWi8l/lRwYSn0x8izbsyGOuVgpH2sYY1Rt7ty16TaJKRUrlDn9JQSfyhgxAW7pu03Wm6FKldNj9/rFIvfHDx/dPv49qNwHZsGt5LGnqfUL6F8nEfYT3Gb7sMwWjWteKKNOgfPnzweDOA9RFR5RtiEFa3jwYIgeyzFUvlaNpuyWgvo485gwDf/PRFs0tgjwn74uDkf2yeHmbIyLqCzYhH6+El4HmWCTRx7RFgQmmPEFmPEVWKPzhdz0ogGS0IcVMLY4yiwmzGrPSamTFnpmtE1WYb6OE66aB60TFjkHSqwz5KdfirYwXF4f4wv5sH3CLgdUN2nD/PPmB/6qFhxnMpHkMCotNaMtc548M9B3LsYYSOKvPH4Cykwg/34tPD0mdpkE8ISfatVHFQwMR4MnsRGDVkNbgi0L17gf6/GC1/Ilf/8Bxk3N1XU+RjZkyz6MR8lqTgOokpO6fPLk8JqA+2L8Xe8/M54/It+GP/6FOQ8Eaw2TVa7jgcqqvz17sZGOK0ZVlvRflkYI+zCwviF831h/NO15VPDBmdXBCdWPJdgZdQ31z5T2MVF/PDfH3qzNE6F0mcV44UxxM9D+v+rF/QP3Xa0sEnbrM4fqxWe5J+UfphroNWNxY038GFx45r2HsYpjPqsgvKBF34FsPQfNmCdbjfj9LpJohngUjNjiVXJC19TUPLX4sZnhKXbGjH/xEwo7M7CwsLOeOE7y5KcD4GGGzcx5hLsb1StWO6RUc+ngJ//u7j442Sw2hTKhR0voPzydgfcVJJkkUkwiVKnpkrJ4j/q+Z9pg33pUm7oYc1r3/UpFJgvNlkQ2HTlcF7BTcqq06xSut8OsWKC3ukvCvv6JLAzEuyrL5jrFhjsLxdWPOJPiTaxf4phxqJiNXUrtWGQa8idFFbqmPkyXoD/0AuTwnfG+kK61BWBNnmT1Y0RyCmFVN89Dl7gzQbCbjBY9MpvPktHhKzPkzpmFlhbZbA7rMV+V0oqIT3eTMwa7Y3DmyyVHwz2M4fd2JBoQ5bnSckxzZhAj2DGL9wWu7Cj3OwTh01Y84BoRqXliQZSk9VVdK+Zahd92NdKRhUGK2YhAOj+t+Cyflcr1k+nabK62V9yGSA1WW2PBGPdeHnkwl5j7sqXmyGTyaXkmMWcny6oFHfSgdVlUGJq/D7CPxEWfYAWnDLAqn7KNDdoRk2OaW64cHgosI4DXRECbNLMmGhrPKmPXGqyA/01Frm8RHY5a4wNCx54LLAGFSu64+RtVjf5S8oqpPJO44xBXNWiel+/8dyUL8bB6Bn1d42/LEgSVCzvOj5JTnEjquqRckXTQBaHXdyAbflb4+TFQHL8aizTBu8kdEMlDz3Biccg/Hu5vNNFHhBBtSwKxYaVf/zqUIJVEgoUoYNxM+5Qky/64p1//0RqsqbhnV0ZVrbisKU9SiUgaxas2Pm582vnlXCIAJuoIxVhdd0yQuyRmqx5nP2HBKt0toT8LpRSCfyUYR1n5zs4rPEXfsgHDhs5WqmKtntRiD1yJ0Wg6/TzX9T1vlbsWNVs2I9gyaOWL+Q2+8V1zWMht3jGHVTMKUJcNCsjxEkVSo+MmlP82GAB9rUM+1o+KvQXv6Qjfy0EZbywsyM0XiE5TpxV6GH92PNEhj1Qzt7Y2NjwXTCHVbrfwljlIdrvQdTxK/liAmziQPtO25XqzyCRO1EDOcXumzefFyVQlB/yUWHLSqVK4HAcYP2lulxxVCAdWL/uUUa0tJd4GaBVqtqwJcNSJfBThf3+M3C309R4+k5yb3xWGas0JFBvArCyhwqFFT33jgKryaBEB5W4D8oA63amKmOVxllPP2TlylmFub9tRkmOf0WzSrBJA61+0NIrBW5LrMYECrqPzR4q9LcmJVg5NQ7UsigfBNik/TL6mZueO1bGPULmx8i0UtUTDiuOCXyJZiWCf0rcSW5YBMLcsTKHL3Si4g8jbOhPRElz53+JpWzQN50a1rBWgGXH/yqwoWPPfwmwkhmHw4plj+iNvxC9iJ2pSVMo09D7AXypDEKHT7d9Ixa18WHFssfhsGouoYVNZzDazY6VcdmIJS2CIUv7Q3/7Sy57uDseG8KKNIckYceMaZUay46VlMLQKeMJz4/lXpnQH8OSYXc4rOmBpalQyWB1HRW+O1anP0XAvjbAhnRBqTWe4I4NNylIAyDJYPUdFa47VvyTKYEKwv4VH1Ya7XG+R8IengLWOBkXsmN1kkzEVGruoeR0MaS/bUYuaIVy1uSMJdiEHTOGqUFsVECdNxIxR15wx/8V94d0QYEIRwopRbATlcnTU8Bqy1mEvSGPuINETDAWOqKksic2rFDhjdUxHk/+lmCTVQLm1eBfA2sgIld6GAJt+G/OC9W7YMW6jkUNbLJKwLyK9kHQGYdOsyVSDiX6Y9M0zQCsmCyacoorEmyySsC4PprWPaozjlg5CgNaWjsO/9F53lURPsijhU3Wv2hihaziiQobtTjrpd6O48KKpfvY5HqEga3EsMbp1eV3ajEbveT79YbWjkNZBVipm8J0jz8l2ERlj25+mw+rrviI/OGCNxtaO44JK1mxKfKcBtaYQAFsYPp45OVEWG7H4T/R58NKVmxyxqeBfTAsG2T4NgAbkS0SqStqg+cV+Mv7RvFhx3GcMXm2KUoy2KtGuXNwW5Tj4+PoRYafrwni710NF/eow187XAK9xb5ckSTx0NalXMql/M+KI0shID0uNVG2QbpBaQRlHWXFk5EidVGKkiy7ssWkymTCpcWl7UmJSWdE8lTsEwiclGd/4ksugWSTiBVDcnWSuTASA9b8tpKogUqUVm3XFPwPMS3IO9O3C0mXiFnxpMOl5Ilvze0VUlyWW0VdFaExeY1s3RVNc6QitdjtLrZlqXX3JFF9guI0frcPu5RLuZRLuZRpCHh/vYsvCN/01ovVVqtaXO8ZD3EFc0zdpQr+t+opwaxUyVF1O3XJLNxEOkZ9jg4N2h0d66hp23322KOKnYNITnMNuzISjunbdnMkn1akp+XVay3TnVnYqDchSajI307ozkkzWcLar233NbvbyONLtjUSX3ytns1kbFlfpADBv2NlrBZ8amRzlpCX5XIN97BeLZfJ5FakU3tb9HoyDL0Y3WnRnU6tmIVr5BvCCbXehN5pYmmzQKPkGus5TdI4IW3pQlbOrnL9ZgAkW5Rh282mnbfch9qy2Un5SiVn47PaVU9fmQBsCx5BgnWoBuhpAFvoZ9kjCAeUmnhRMBs/sYdj2GbGYp8ywtdsO5fnR7GT4G+lkmUKwdSSXSjnq7K+tUy/zhL58ajuS/TInPf0+VIDzaFXz8PFci0GW7cCsKghBdYhRabZQnPEaPPr/MU2CBiD1eZJaxXe/xZuVibFSadEvy7xrzst+JsFk8wuCyfBX1rbUTNpY+FYL05yOXxPvudpdukrynfFx1vvUNuzmcK34PBso9cYrTTgHGcCbzS3lQS2wGHrDFZ4u+11hM3W+Rk1eCLW1koN0mhT+OwW/7qFbyqD7Y+baC2Hj95qQZugdXQXLzACs8wuewdluhX6cSI+Xon6HGhcdo000Iar2WZp0qr02zX6bR122Y2Tw5boDXO+W3NhraxfvSCsxbabLmzG4hVUE+9o4XsTyy0fNmPRssfq4z26tthq6tVRTnpFtGXRlwL376B+6RVLTPGFeh8a9wh0m3dOCmu1wbXkvRsyWFQGVk2jJsLmVtiOAoO1WjVeTBV82FyDd49s+7BMk06jUoGHzAKIp/5mwZYfeaVEXwjej2Tg0W1uYYUs+KYJ3KZ+YtgSsdj5Aiy3tBqDzde8HcyMq0QRhLXViC7AwsNQku28AEuyXTDzEj+hs4LvI2OTOjonoTURx6a24cDu3ClgV/JctaeDVWKmAkuaXfrEImxxq5EXTytQ70lyGLOwwbakq9XAxuEl0LB0Qlh66wp/oqnCLtNmJ8HSq+fFUDtq0xugh4bGHLjeFvVlYPjUP57QQVHXj6+3MH3YlRY8qwBL8ttFMdR21tkjZ+H9S/EfBRVPsytKVDwZLNy74z//VGFHLfA+ImxxuWfzUAswDmiuXsAYtaVcjpT8Jn0yWKtdWceIwJ50mg6KVIukmpVgt5v4ot1QW6dtFGKDXVjHQKbk+fi2CEar3klhu00CKSzzBvFgabxakaRWwdBTl3evr0iwTr+HcVbwvsTeXuGhNtNgT1Iiyx1MuFXYbZs+AHio7RPClkipiBHcrsWG9dJdT+x6B5MKpcvXlmFLE8ygmmJ+uLzs+KG2R60YA+86abcsuUBhAnaOYbhxYthev0cg3rXjwyqSdWHV3QhrlXDcpF7JWnCMLRln18Zbd2AbrLjO9NzZstSsGYU+/ClhSbFDwE/Y3fia9bPCLGx6muXpIm4yzXolEr6jXFZRV7PW9UKt1WBRkPolq5jVwjZ7p4YltOxxPUfMNtvye9nrJUgRCxmWLvq77XXIGVluLJmA+vhbRcgiINT2+tAo2Tt3s08dLLbZ7ilgG30HGgutJ2Jqlg9uZNq422JRzJcm+nYXFqrjvJ0PJIAg1I7dUFufsLiSoXuZvwt4Y3h48Mb5k3pj9I2tCaboFdJaieeN+ehnl8PmhEEYh8NWSqVWsevU6tBm80rPBLVjN9SCFdtumt4GH82fwhNQPsZZxwibiYZ1+l3wivlGdZR6nLVa6+ujrWaJ4rezbjkqCA2+JXpQtdAnPJXbGnUyUkB2b95hGZRlTiosGdbx6iwBlhoHKdKX2ZmcCjYsg5rAO0d3LPcyNnKYSGSLLRZksVmstIq6l0eTa8yNq9rcGArxjNS7CC9wwq4pwpJOHXJyGDidVrpI74ANTj25XyNuB0TB9oJrrQl+KNBoaYheMVc9GBCkFwRJiJsKS7C9fgGfZHqwNDVEHNU6J3UIBaBwLN/YzlwjG6wEGnmMTXCoDhY7OKV4BVWU6wYkWFIsEewzm14hkOtix6EK27AwN8/3xFKzPtH448wK1t5wjA4WHlTumm2PiNenJ8MSu7EOX0wPloZU9I0KLKEJHIZguJHt3oh6zLxa0RYzaBnY6HWwBLuuc/wztVb0WmAtCmyjia+2vjwtWPClDasSgG3V0YArW+KLqJfg1VsWb4Lr/YIDHVN5ULcWFqN0jqu2tIw2gw+gwJIWdpJYUlWWJiwm+s1iToVtuBqT7daqYzdnzmuDxWavBilnFqszLWwBe+r95LtaIbWc57NU2EK/hkEscwLYTJx6trlNHUwjq8LS0s8bJhGuUOivtNC9trpOYbue7axX8Y2wsxHWale5bNXrowpeJd/uFgq1Uaa0XYQz0BICsGSUwYYSDZvpCHeZwNQWHBGwJsLuZbp3MpFgJ9AHSssf9U21RphOKD1stX5xgqMnMK0HtG4hCOGw4igMSH7SQVo4w85ZFRwvybP+jgAsqYxY4h5d4gUmL2GQU26ezVUl2PUS2qyU5OD+jutc5Aq2kGlPKnId4fcjM1i1pNxyKkql6Z8RhK31G7l4sIH76OpZmgRKsNhhRuO5Cuv017ttqBVs5Yu6nfFuZmVp0Vj0rbxYVeeRZak2J8SZ2P6DWPSKVc+NFJpVWk93xKsvtzr0vHzT7+qqNbujnGX3OWynrU7YA6PJVtW9cPN8u0S/5g28U2x0O4Eqj7oSmBi23OsFhs2dlXYe55rlO9W6mC7U+UwyV7Z6tRqQ1ZYtNjutMik2eGZaoOVIqSXfAK7R6fK71mCCWqdX889qBO7S2e7Vem11d6dI945gb5XfoVGBqwVhQ6VHC+NeoglnBVpi1xL/MOulXMqlXMqlXMqlXMqlXMqlXDSJWPpWCFn61tWsfdOvtWl4S3HU5W+kseUubWPdHVXjijZhVRstpri4M/CwcsWaUlgBlXDBkiD8zPTWvmVJPZ98VZsimu6C/00h2q4NJsmQzevcVEm47i168ZtgDaHmQmHjrWQTLNtdvck7FJl4yz3l9W7mxW7Sijd/yVucNW9sVqay6i10zRuT/wN3G7DpOiZeAwAAAABJRU5ErkJggg==" alt="img"/> 
            <h3>About Us</h3>
            <p>Welcome to Volunteer Work Manager, where we help you find volunteer opportunities!
                Here we are motivated to help our community and find you the perfect place to 
                voluteer your skills! Join us by voluteering and doing local outreach with the 
                opportunities listed on our volunteer page.
            </p>
        </body>
        </div>
    )
}