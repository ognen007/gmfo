import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Projects = () => {
  return (
    <section id="endeavors" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Events and Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to Progress and Unity
          </p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto mb-16">
          <p>
            At the Global Macedonian Foundation Eternal, we are committed to impactful initiatives that preserve Macedonia's heritage while fostering growth and education. Our projects showcase the rich tapestry of Macedonian culture and tradition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img 
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEMQAAIBAwMCAwYDBQYEBQUAAAECAwAEEQUSITFBEyJRBhRhcYGRMqHBFSNCYrEzUnLR4fEHJLLwFkOCosIlU4OSw//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACYRAAICAgIDAAICAwEAAAAAAAABAhEDEiExE0FRBCIyYbHh8IH/2gAMAwEAAhEDEQA/ABvDB6/lW/D28MK3bzRscEc0cIBIAe1e7scFABt9wytbSNl9cUyS0II64qZbQk8ClcgUB24wRkU3t1O0YNQ+6ELRVsmMc0spWaiU4ACng+vrXLRiiCuRyPkaiKkH4UlmogdFIwRUDW4zwKY+EHXy9ajaJvStsLQEsKjqKk8FWXC8VOsZJ5FdvHsHFbY1AaxFTyAajggG+jMY6114QVsitsaiFrZOwrjwtvIHFGjB4rWzKEDrW2CgRTufBplbx8qaCCYfpTS18qAkcVKTHSDrWHMoz0oqVBt8Md6kkPibs9K5G7kVS4EN/ZgSscUskh4qx3/Q7hzStkDdRxV4xlwYDjRYxvxk9q08PiIWIqcoTxjgVxM+1cL3prALJY8NkCjtKILg55B4qCQ4Xbjmu7PMbrjr3rWMej2U6mBd1AX11GxIAzk1wXaRvgTXHHDUrKWEQoJHy3NTXLx+HwMbRULzCCLAHmqNhvXJb501WzBWmIpG7uaPkiIORQ2lxFznGFHSmz87Vx3rmyvkZI1FGPDGBWVKPLwK1UrHPDrixkjcnnj0qezuZIG2tyKsvukcmcgnPwoK50XJLRA/KvaWSzl1CbGdJU7Zo+OMN2pFb28lvMFIIIp/bHcq44NCUhaJY7dScEUR7ipGVHFSQqBgmmMGwgCpSm0HUUtZuB5agkhdOoqzeAMcUNNb8HIpY5jOBXUOGorasg6c1NNaANwK1FHs4NV3RKuSJrY7cgUBIuPxCnccHiIdpwaAuYCmd1BTDqALjuKkRAw5rNvBNc7wOhprBRA/lk4qeAblPrUNxgruB6VLZHA8w61rGolht8v5+9MYIFTy1DCFZ/lTKCEFsjtUpyoZIOtolSIKBWpYBg4HNdpKFIqQuHB9K5Hd2WVUKLi1Mj0qmhZZMEcVYznfgDil14AXK45NXhMVoUSx4BxQEqEA7qsItwAAe9K9UiOdqrxVVIFCY4381LH5ZPIM1ILNmkAxTC2tBH1xmi2Oc2xc9RRwUoN2ea0ImX+GtufL1pGwpEc0mcA8n1qSBXkkWMfhHU0MUaZwq+vWn9hZrFGvdj1pZyUUFILgAhjCqO1Sxlt2ccVviNctQs94EUlTiuOnJ8Dh3AJPrWVX5dX5/FWqPhkCxFE5ifdG5x6GjPEMikiMnPU5oCK3Y9G3UVHbXMfmUsAOtdLYiQBcsVmLKpGPUVLb3ByKNktzMMlea6isVKEgciqboVxJrSXf3pjHJwMUsW3aEZomzkzIA1K2mamOLaUEbe4o3ww680AY9pDRj5ijra4BXawwa55cdDJEEtmM/6UNJaAfw06wCK4aMHtSrK0aWNCMRvH04FQ3gDoMinU8XHSlV2u0dKtGdsm40J5o8JwaEKgAluMUwn6Yqu69dTQKscTgeI4TPPGflXQ5UhYxt0d3czKAAy4LgED4/70Haayx1Z7Pw+g7EdPX/AL/OlV8z2MbeK7SS2x8SCRh+IZ5DfDqPmRUunG2nu1uwYi5XbvbhuAcD71zSzu6OuP43Fl0tJhuz1BphHd7WO2qXouqbkaO9mxMo8THYIc4JPbkN19KcpcjcTk4PQ+tWTUlaOaUHHsfe89D3+dNLQeLHuDYqsQyliOtOLG4McW3nipziGI4SHAJxmh3swWLMOakt7oN14qWe4VV61H9kylIB9yDHJPSll3Zgv3602NwNvBodZUkcl8DFUUmChYbcoM46VuNN3bNE3sgxhe9asU2jceady4MkYId/Q1v3Ebclh8qklmRfw4H1qKS8GMAjNLs2UokgtY0Of0o0TrEmO/agRc8FdwqO+ulWLgDNK02Ylu70buW49KSX94SxCk1FJKzNnJ61BcRO3NVhFIVg7T8/61lQPG2a1VxB/JZ+CMgkD4VkckyIRnxkPA55FN/3UqFT0PShk08wyM4AKnoc9K89TLUBe8NGMkEfA0NLczb90DEGnMlmsqkr6dKWPZyRFiY3IHoKrGaYrRu11B2yJlJ9TTO3SJ18SJufRhilcHGMLnuMjmmNtexrIqSLn40W/gApLlo26YPcGjI5wwDbcGuxDbzAEKOe9dvbJCo61PZAoKtpxKMDqKlLAdaTvmFiY2x3qN9SlUYcZX1ApdL6DsO/K6/CgL238RfIM+tBDVAvAOc1w+oZPDYp4xaFk0wK6jKFsgjHrSe4gWQglQSDkE9vlVgkukl/Hg0ruUycofLXQmSaEOp6cl5AyMMPtIRs/h/04FUyWNVtZCUijuIj4gwoBJH/AGa9HMZZTx26mqR7T6Nc2UEuoM4MrzZ8KMHCqe2e/wCWe1c+eN8o6/xslfqwyxsIr/UJ3u0VptqldrkAxkg4IHBG7PB6duDVlSDkJ/COmKpnsvdo8dne3JZZpDseUMCHxkbT36lvtV9VCOn3o4HxQv5C/awq3tti7iftXbT7eN32qJWcLg5NQ7G35xkGrHOH298wbmu7i+D96BAwfjWmjfPwoUFBnvHGAeK5Dt26fOhyAkTPIwRFGSxIAA79eKqGp+2E8omi0CJW8LKvdToRGD32jHmxQHSLldXEcCGS6lSKNRnc5wKrN3/xC0y3kNvYJPfS5xiBPKD8WOBiqjcWU2rS20t/NLqDMpLtIxWNDjKnbnA/MD4UdaafMfPJlQ+SYlGfDUgDGQdp+jUG4LsdRkzeoe3HtBJOqxW1lZQnBEkreIxGe3QflSqfV/aF9RCTazO7MT4UcaBV3Y4BIAAyfnT+H2cBEe6Ar4WQFfIDD7D+tEvpEFqSbiW3jLEMQZRuyDkfHtS+aK6HWKb7FHsX7fTzz+46uWyD5ZcZA/xHtXokymYB1OU6gjoRVMmg0wK2bjxiTyscJfI7c9PzonSvaKHRgbeZbhrUtlROu3wf8PByOvHwpPIuxniZZ9oByV6VBcy+Q8cijllguYFntpFkicZVgOooGVCzEbarGYjjQAxJNZREkZ44rdPuLQ7jn3ICSMjpipZJmMIKE7u4qoWeqbMZJx86d2+po6jjr1xXE4NDpoYxTSpzg0fBcqcbwaWpfQKVJbk5PJ4okalYqP3k8C/AuuaHIwbOLUtwoBbrxSK9tmWXMTcUUdb0Se5NsL2ETBST5hgDOOtRrc2Mtx4NtfW8sh6IJASfpVItoVxsms7i5RFWRCR2YU7trkSKElU47E0DBuQDaOO6mu38Y8xkbewpZOwVQdPJAuMqD8aV3V1b4bg/Dislu2I2vH5h3oOaeNh+8Q08OBGgGS4Rc4BqBrlj0BxUtw0RGUoVpCBwK6EyTJVnahdQ1B7aLCbR6u3Ra7CueS2M0s1q0mmaCRFMsaEl0wMnI6470Jt1wGFOXJD7802XL3MyryWUbV+/ArcN5bqQzRRsSDx46VV9XsdTu79UhlPhyNtic42xj0PHHfk5Ndx+xN08W5tTQN3AicgfXdmuJ5H9O9Y4lpmksrhNzWuwA53pGCoPHdf++ab6dqInaMSlZVY4WSP19DXmyaRrOi3aQxSmUOpKyQbsHb13A/Mdev0q56RBK+oW0sW3Kj/mZF/C3H05z6U2ObsTLBUW5AmCMcjrW/KOgqSPwyFz1rcoGcKBXVZx0CkLuziuxgkAnArfgEmtyIsUReZgqDkk0HJDJOyn+2YmvZYrKMuLQPmRFypmI5A3DoucUJBpiW9uhuXhjPmVM8EAtu6Dn0+tHPIS8k2QWb/zWxvwD+FB24zzUsEIWO9ijiIkVG/eSHeSysecfLB+tc0sjkdcYJLkh8nhI8VmZfOQZG8q59QvrzWf854Uc8EkalXZWVEBOR2z61K+H0e+WZvEWFxKwkIGONwxt/Wu9PKyW9yFXAidXUiLaGBG7PTk880rXA67BFd72Zo3e5fbtZtxZRhl4+Hp09aivbK4WeEQJFHC6ujuSBtyPK3x5oxodQN2niS/8u0Ry28DDBzt446rio9btFltgyXMVu6SLMHZd2Ap6/HqKK1TVAAtRtVmtHjWVIlkUhcdM9QcD60GyK9kPDmDMCCXRSoPPX7gj605lFr4LSEs0cR3jH8J/F9sNSmxiggE9rC07lXIJlYYUnLAfLg4+dFdDEOiazJotx5wZbJz5kUk4/mX6V6HB4N9bR3FrKkkTjIK/r8fhXmlxFGCyxKTGpAK9COnT4c1L7Pa9cezl1wXnsHOJoQfw/zqD07nAx17mts/QkonoclpjqKyire5ttRtY7mylWWGTkMDmt1vIxaPMUu8AZUBcYfCncD9sV1HfoI5TFcTjPAcgBQccD8XzNQS3lu13Pd/s+W5njPhFFbHGeelZBNpdxLZ2TaX4JvCHaFn6H1b04H2zXK8mSXZ0rHjj0kFTWj30qRXcmWZNyRs4VmGOTgHJ+1ZaaRpTxTTpDZTRIcyzRsr7fn5fhTOK6kabUJUs98lvGI4irkeID1APoKnTxv2XaC3sBHLNNmaEH8C9Ax9RjFS8svo+kV0geHSLERx4itlGMqDExwD8AtGHSbWGKG6aGGRGfyNGnKnnn1HQ9jUk7/vGcHyr0I+A7U61Amw0xY/c/ezHD5osdTgDj7mq5140qbtk8b2bFsN7qDIlxpOopMqHaIpPPG/wOOQflz/AC000z2ts5pltdUifTbtztRZ8eHKf5JM7T/hPPwqvx2emGa2SyuZdMmitnmaCQ+U7uRuP0HHpxW7n32G0CazZLe25jTfNCgdZGJwBjnp154pMeZrhuwTxxfovoWGQAg/6Vy9lE6nkHtjvVBtb6WzCxaVqaxRGPKQXCeIqgn+Ek5x174ptpetXdojpqbCdy25GhBG3710LNH6SeGXoa+62txK8K7xJHwwZGX8yMH6Gh5tNKE4Uk0ysHLLJc+BKpmYEB+uAOP1qaS6iA8+R8MVZZGQcV7K5LFs8pWsKRIoeQny08k90kBDPGD1wzAUi9opI4pbaG2ZDuJ5Rgx4xxgfDNM8yS5Fjicma1URxWEs6WpmlQLtCrlidw/zpGt97QgeTQ0CDldzjP8A1CjZNRWGZbi9meK3jPKsCNmRwD/eOcdq4/8AFuiAkeO5HqI65ZzWR2jpjF448kujyPqHvC3mnPbSxbPLKDgg7uR09Pj060xDeGAP4ew7ClMupR3qJPpl5I6ISJVjUkDONueOO/50w06Vb+ecYGVx5lOQT3xXRgywrUhlxz/kErcYNFRz5xUL2RXoOa6itmDcDB6cGuhyRBJjCKQt0qS5tfebWaJwCGjPBpNf3dnoxW91Kbwo1bZuZmwCemR0rnT/AG49n7y9hs4b8PLO3hqAh5Y8AfKpSTaLR7QpiVpIj4K9eDKSBt3DHf0B6D5VPbKW1JwZMrOrbBwF8yg9uT0Jz8TWrto7ZZmuZtiw5ZQpHCxncevA/DXK+DDqdoYLZlU4QMIy21VYx4yfQDqOxrms6yLQjFIbmC3jIVrfO+KE4ypK43Ecny+tdaGLtpCLyHw1ltwCGmVmWTnIwOOmOhqezS6XXlEkY8ASSp+8fJdTt2EYH+IVDptq9vr1q8t9FGyzywiHB84fnZ8wBRclT5ARXtmizQStfRw4nEkiSAt5SgTaMdMlc9+/FEXcFrcWHhvJJiRTbKV/EC3lHy5A60J7UW6aYJYr2cr4n4Xjyx27sj4dv61DDcia2knjjmdocNgW5yTkEHJ+IzSrJGlfobX2dabJZixjiUymPZtLTEEtjjB+46+lLDcWkeoe8R2oSa4Vs7nwSY8jbjueOK1psMqSMsen3UEckpLliOpPXmh9SgvZdVWA6crmJiI5JJkyOhyo7Z/Smc1zwwqPXIXqkMMMqKOC67vFXkdccjrn/Ok1xGQpDLgkZyCMMcDoeh/3pg2nX11ZmdbORZEJ34nDnCjPc/AdKVSTzWkjQXiEY9V5wOAT9utCE0GUS3/8KCjz6jZ+MVkwsqqT5cdDgfasqsez2s/sHXoNRjIZNrhwoJ3KQePvtrK2SLcuCHKCotN1+C1jGjSWembiXkjiC+bJ6+bcc4+I601t0uW1Ke7litBGYsRzpGonL4xksTjpnoOhFJI7PTLq5kv9O1V5bi2TPh3G6KInGBuLVKz6faaOLHUrqESXh3g22+UMvGMMAeuK5JN1/o6o6jWax1l9Jt4YdTT313Zg7KmzGcLxjrTOSBv2kWS/l228ZSRC39o3ZsDt8PiKQi50WbUbaYyTNLZRgRhLeTAC/hyMetF2V9orSX2obryNrnmWQJhAF9Cx4HA+1JDvkaXQ3sojPeQR4/FINw7YHJ/IGmHtFHrDnfol5FHKWVPDdgNwAJI5BHOVoHS73TSi3dlPeyBlOx8KR/X6UJeX+hXt7bPc6pLBcwSeMUMbLuzg4Y4wBgD7CqfkZllmq9E8eNwjb9kupX13bC6GtaL7xbq626SQKQ0gbOTgZGBt56dvnUMF3Ye9M2n6tcWMpuAjw3I8rGMYKj1GB119a3p8iq8aaZ7UWs6m7ad094Us0Zx5Pphvv8KKWHWZFtl1HTbO8DgiaZAMAswGRjGRtLE96mkhzie1vZrxTLaaTdEMitK8a7zgDd0Yd8kYqxXxEdpcStwkUbOT8FBP6d6rOlQq2se8zaDJaMX3tcSOcbiScgYx1H5in+sSwfsm8RnXEkTKQG654+nU0r/mkblRZRX9rPaNnMS6rLgHpHHGMt/F0X1zW31b2haVY59auV3fhijw80nqAAOO3PPXtQsLRxzpECq7g8j7SATz3x86isLq4jt5JrRLkwqf3kiKtnD85JnO5sc/hwK9rJkVVFHk4vx3e03Y2gkFsrWl3ZvF4z4YPLl956BuuSc/McU1Tw5Zt0srpHEmFUDG5fMMAcZAxnn/AHTR31uvs/uMUSHxd0k1oWdecjyvjntzTH2XeU2cDAG7kEX4nQkfiIwQP19K8rLbPSj+tDX3OwKS2zQLLBEkIAkQHgBiuR0OOv0qVbG2Uge5Rgbfw+EMVTvbDWL601u5thIY4QsP9l/Fwevp/pStLqeeXMFzKVQ+fMxGRVMUHXZDLkXwvE2k6ZBqNnceB4EvgzHMcZCsOM7sccZ4+tE27y6beRtFOsiTw7irL5jjB4J7YJrzmz9qr6DZLGJrhBOYsE7gv8TD6gAfI+ua9A1JT73prOrR7QR5htU5XGO2CP06VLJtCVovikpRposgSWaJJYlLxuoZSF6gjuKA1OS6tIN0ESeKWAHjHCAZ8zHpwF3HqPmKVwe2FzoxjthHbT2wZ8CSXw3Hm6Antz6cYx2qX2i1y313TnhSPY4gmBCyrKvmQrwVzyM/nXbvLx7fTkSj5KfoX6kkuuWPut01rfRCUM0duSuGHTzKfy/Oh10Ox066juY/Z+VjDKsiSxMq8gD+UHrmk/sPdSPo90EeOFkuUkEchHnGP7zYxTf20mEeh2ssc3hpbajz7rMHzkcZwx9eR8jU3lknVllFPmhhcWktxPJK8aiCdm3tM5jUDk52dTyfrWCeaO3s4lntWljdjI8chUY3KQB1JHX70EzOxt5I4xKxlRWIYNtVsg8k446kdfhRuj212Le595Qbknk8PJ/8sk47cdK57ldovS6Or26EmvnU4XUJFcRzpCLc7iQjIwJJx5t3XHGKgv0TUNRkvgt0jNOk6oHVFDIMdgTz3oq8inSyE0CRurecsvmAA7k1PcMIrRry7lWGJQGk3ADHHXIplPI/6NrBcsgvNQvGR5pYbWBUBOTuyAMHqMA9T60BYapLfo8sF5AgIAO2Hkg9OvWmyxRXtkHSZJRMGXk9seh5HfrXm9zqUXs/qltbaFK1y8Q8OWOViA+GAwGPH1zjNWxxjKL+k5yprjgslxqU8V0LNryQIeB4USquPpQXtBfS6VYNdm+v2wwXETDLZOB1GP8AejPaRNLtZorm8kYu3kXwmJZcdcgelT30Wm6lpyW1xdW0yTxCVRvB3qMHp17CnetJ0BOTsRaZdnWLATw39+CykDc/KMPlS2W8vUHh6lEuoRDnLkmQZxk5656jr26Uw9nL/SZjOtkfdlXDeHKjLv56j511c2bGZgkyZLsNjHk9D/8ANqRtJjLZrkrk0Ftc7jY3xjIwfCuAMj69G/SsorU9PZUZZ7RjkjPl7/DvWVRT/sR1ZYLv2l9mrVPAhu4wGIVkgJfODxSe8uF1H2l0y3iGyCBDMUc8hR0/oP8A9jVbGhe7ixeJhLeyTlZ4+CkeDnjjrVjhsbmC61WcgLJLAIrQbx8eW/Kud4VD+LspCblwxfYX7RtrF9O6q0qH3aPcMMScA/bH2orR5Yk9mXiurgF55s7WYsUCjCqB6EqTjPegp9CuU0W20uJFkneYySP4gCbR0HTj6mnVz7PSS2en2FpLCkMEam4d3A3ueDtP0/OmklXH3/AI3XP/AFlg0R1sdFgjvSElEPiy552Z+P8ArS/SNMnltp7m7gmhurli0iupHlJ4XOD2NZr2n6hfaOtpbzQSTF/OwnRAEH4RnHP50gf2V1mWCKAOQImYu/v6hiTg4zjkY+FTx47bb9splyVUUWv9iWZZ3vLN9jx+GzBywVcEdNo/vN+dB69Z2OiKraYBFLJnK7yuQozxwO9IYvZHV4lY75C2QMNfhxjv0UYP3qZvYq+DG53AxKuVimufFYcYzgIecn1/yqzhH2yXlfwYaVr15a6ZdXT3Lyzh40h8aZ2XzkKfLn4jmrPqetw TWslnAsr3R4CkHaxHXBJx/vVE0z2f1uEmAW6mOSNVBY4CnGCD3x37das2ney2qWOpW82olHgj5d7VnZie2AxPTjsaTTHd2HySqjn2rtoEnsvd/FRxblJI0UtxnJ7nHzpBb2s8zr4UFrJGRsiN0rOYx34HxI74716HZ6doFndLcz21/c3K8LJdHIUdhgADj1xnjqacftjSUYHwXyO7YyPlmq7/ANkVF2ec29pfTxNZrZSlVDZaGMqrfIdAKc2/sjfy2YtRNJZWwAwiNghvXA6fKromtaZjyOyDHHC4/rUn7W03OPH4+JH+dJrAo5P0inXPsTE0ju97cMzosZOB0AI/Wld9oVn7N2wuDJJcrKQhWRB5F9av8mpabjmYZ7D1/Olmrtpd9a7IprsuMnfHGq8nj+L/AGo7RiuCet9iWx9gbJHR47y4yH3ZwMjjt6dvtTCL2T1K2vTMl293CWB2ySHK+UjIXp3qwi4srfDSXO0j+9tGfzzU/vEMsf7yAqexEaMw+uDRBYm2OrCJ761E2eVe5bP2IqQ+C3kN5aSMP4QwkP24xTO2ks7WBohHeS7jktJK276HHH0oaSWMHdDb6q7Dt765X69aCimzbEVrbBgRDeRwfBgqA/UkgVg1XwC9uHjk6qXc7cHHY56fSu7XWb95Cj6Rdxx9mN0/Pz7VlxZtcKVhs47dic7mj8U/UFf1plFJ8ozk/RkskFzppt5LrTtsqFHjeQMxB4Oehz9Kq7+x8QtLKJruSZrRg6SAYJbIOevwq0aZopsrh5syy7hgx+6Db1zxk8U1ZCP7GylRfQShP1o7av9Q1fZ5b7Q2Utv7VaTrEEcuFBWXCgMSGJycnJJDHJ55A9cUXpVjJo/tqsz3AurW8EjtKi+SM8na3OM4A546Vf5LMMWLWMIJ7yShj/rXEunu648G2VCMYWRh/QD+tP5eBVChFpn/0y1MCIt1EGG0xOWf8IHYdcjP1pxbxS3cJb3S4tx/dlcjd8sN+lFw2dykYSO6KKOgSMkj6ljmo5dM3gie4u5P/AMmz/pAqW0fRTVt2xTJLb2NwlhN41s5P7tUlLK326fap2tFA3eNNj44/yomPTbS1cvb2sUbHq2OT8z1rGhYDpnsPMeKVyGURfJaZI/eg8fxQI36Vqj2g3AHj61lbY2piRoARtH2rEwW/CBj0zW6ypWOgqMnb1PFdjrnA+1ZWVgEm1SOVU59VFd/s+22BjEjH4oP8q1WVgGms7QLu92iz8Vofwbdm2m2gxn/7YrVZSttDQSsl/Z1mzAm2iyf5RU5tLXOPdocAgfgBrKyts/ppRRGbe3C+W3iHwCDFdC3t2AJt4enP7sc1lZWUn9JtI5eCFcbYYuOnkFb8KPGBGgHwFZWUU2FI34aEfhXj+UVBuG/Hhpx8KyspmMTxBW/gUf8ApFRtJtxhU64/DW6yhYESR9FYDk9aKyQowfyrKyhYGaUk5ya5d9rYwKysrMx0hDDG0Vsou1jtHlHGa3WVrZkjhMMSMAfKuyBsJwMisrKxiM49F+1cOcKSAOBnpWVlMOcId43EAH4VE55xWVlMY4ZQVJ/QVDJH5wu44Iz0FZWUpgedPDZQGJznqB/lWVlZRQD/2Q=="
              alt="Traditional Macedonian Architecture"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-800">Heritage Preservation</h3>
              <p className="text-gray-600">Documenting and preserving traditional Macedonian architecture and cultural sites</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&q=80"
              alt="Traditional Crafts"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-800">Cultural Workshops</h3>
              <p className="text-gray-600">Promoting traditional crafts and artisanal skills to new generations</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80"
              alt="Educational Programs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-800">Educational Initiatives</h3>
              <p className="text-gray-600">Supporting research and education in Macedonian history and culture</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-200">Stay Tuned!</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  We're actively preparing engaging content to share with you. Here, you will soon find links to our official social media channels, including LinkedIn, where we will provide updates, images, and videos from previous events and exciting campaigns.
                </p>
                <div className="flex space-x-4 mb-8">
                  <a href="#" className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all transform hover:scale-110">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all transform hover:scale-110">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-gray-200 mb-6">Coming Soon</h4>
                <div className="space-y-6">
                  <div className="bg-black/30 p-6 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-all cursor-pointer group">
                    <h5 className="text-lg font-semibold mb-2 group-hover:text-white">Get Involved</h5>
                    <p className="text-gray-300">Discover opportunities to make an impact in preserving our heritage</p>
                  </div>
                  <div className="bg-black/30 p-6 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-all cursor-pointer group">
                    <h5 className="text-lg font-semibold mb-2 group-hover:text-white">Project Updates</h5>
                    <p className="text-gray-300">Stay informed about our ongoing and upcoming initiatives</p>
                  </div>
                  <div className="bg-black/30 p-6 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-all cursor-pointer group">
                    <h5 className="text-lg font-semibold mb-2 group-hover:text-white">Event Highlights</h5>
                    <p className="text-gray-300">Experience the visual journey of our events and collaborations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;