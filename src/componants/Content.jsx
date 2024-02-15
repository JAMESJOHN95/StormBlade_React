import React from 'react'
import Card from 'react-bootstrap/Card';
function Content() {
  return (
    <>
      <div className='  m-3  p-5 row'>
        <div className='col-lg-6 p-3'>
          <h3 className='text-danger'>About</h3>
          <p style={{ color: 'white' }} className='text-justify'>Martial arts encompass a broad range of practices and traditions focused on combat techniques, physical exercise, and mental discipline. Originating from various cultures around the world, martial arts can be categorized into different styles, each with its unique techniques, philosophy, and cultural significance. Here are some key points about martial arts</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5  p-3">
          <img className='w-100' src="https://i.pinimg.com/564x/d5/2f/a7/d52fa794e3f322310f5dce1bea0151c1.jpg" alt="" />
        </div>
      </div>
      <h3 className='text-center text-danger'>Traditional Martial Arts In India</h3>
      <div style={{ marginLeft: 'auto', marginRight: 'auto' }} className="row container mb-5 ">
        <div className="col-lg-3 p-2">
          <Card style={{ width: '18rem', height: '510px' }}>
            <Card.Img style={{ height: '220px' }} variant="top" src="https://lh3.googleusercontent.com/udeZ7-3NW4zIKM_tiyu2b8W002YdjWi9OFiE-l_HWP26qxiouiMrkN0oU8T26U_xd_iLnd7P2WctPNayAlXsSu0e=s900" />
            <Card.Body>
              <Card.Title className='text-danger'>Gatka</Card.Title>
              <Card.Text style={{ textAlign: 'justify', color: 'white' }}>
                Developed by the Sikhs, Gatka is a traditional martial art that focuses on armed combat using wooden sticks (gatka) and various other weapons. It is also a significant aspect of Sikh cultural heritage Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-2">
          <Card style={{ width: '18rem', height: '510px' }}>
            <Card.Img style={{ height: '220px' }} variant="top" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/kalaripayattu-aman-chotani.jpg" />
            <Card.Body>
              <Card.Title className='text-danger'>Kalaripayattu</Card.Title>
              <Card.Text style={{ textAlign: 'justify', color: 'white' }}>
                Originating in Kerala, Kalaripayattu is one of the oldest martial arts in the world. It incorporates strikes, kicks, grappling, weaponry, and healing techniques. It is believed to have influenced many other Asian martial arts
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-2">
          <Card style={{ width: '18rem', height: '510px' }}>
            <Card.Img style={{ height: '220px' }} variant="top" src="https://images.livemint.com/img/2022/02/20/1140x641/Ais_3_1645324583574_1645324950581.jpg" />
            <Card.Body >
              <Card.Title className='text-danger'>Silambam</Card.Title>
              <Card.Text style={{ textAlign: 'justify', color: 'white' }}>
                Hailing from Tamil Nadu, Silambam is a weapon-based martial art that primarily utilizes a bamboo staff. It involves intricate footwork, strikes, and defensive techniques.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-2">
          <Card style={{ width: '18rem', height: '510px' }}>
            <Card.Img style={{ height: '220px' }} variant="top" src="https://pbs.twimg.com/media/Cr6IciqWIAACffq?format=jpg&name=4096x4096" />
            <Card.Body >
              <Card.Title className='text-danger'>Thang-Ta</Card.Title>
              <Card.Text style={{ textAlign: 'justify', color: 'white' }}>
                Originating from Manipur, Thang-Ta is a combination of sword (Thang) and spear (Ta) techniques. It emphasizes agility, coordination, and swift movements
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* ***************************************international************************************************* */}

      <h3 className='text-center text-danger'>International Martial Arts </h3>
      <div style={{ marginLeft: 'auto', marginRight: 'auto' }} className="row container mb-5 ">
        <div className="col-lg-3 p-2">
          <Card style={{ width: '18rem', height: '510px' }}>
            <Card.Img style={{ height: '220px' }} variant="top" src="https://thumbs.dreamstime.com/b/karate-martial-arts-fighter-dark-backgrounds-karate-martial-arts-fighter-dark-background-161689155.jpg" />
            <Card.Body>
              <Card.Title className='text-danger'>Karate</Card.Title>
              <Card.Text style={{ textAlign: 'justify', color: 'white' }}>
                Originating in Okinawa, Japan, Karate emphasizes striking techniques using the hands, feet, elbows, and knees. It focuses on disciplined training and is practiced for self-defense, physical fitness, and mental discipline.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-2">
          <Card style={{ width: '18rem', height: '510px' }}>
            <Card.Img style={{ height: '220px' }} variant="top" src="https://thebridge.in/wp-content/uploads/2020/11/Taekwondo-Source-WTM-Taekwondo-Action.jpg" />
            <Card.Body>
              <Card.Title className='text-danger'>Taekwondo</Card.Title>
              <Card.Text style={{ textAlign: 'justify', color: 'white' }}>
                Developed in Korea, Taekwondo is known for its emphasis on high kicks and fast-paced kicking techniques. It combines self-defense techniques with traditional Korean martial arts philosophy and is practiced as both a sport and a form of self-improvement.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-2">
          <Card style={{ width: '18rem', height: '510px' }}>
            <Card.Img style={{ height: '220px' }} variant="top" src="https://www.eju.net/wp-content/uploads/2022/05/_BT__D5B3100-scaled.jpg" />
            <Card.Body >
              <Card.Title className='text-danger'>Judo</Card.Title>
              <Card.Text style={{ textAlign: 'justify', color: 'white' }}>
                Created in Japan, Judo is a grappling-based martial art that emphasizes throws, joint locks, and pins. It focuses on using an opponent's strength and momentum against them and is practiced as an Olympic sport.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 p-2">
          <Card style={{ width: '18rem', height: '510px' }}>
            <Card.Img style={{ height: '220px' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrcjFaclEYYHOZXhtzzwEWl0agxNuS6qKzagSqg8ZZA&s" />
            <Card.Body >
              <Card.Title className='text-danger'>Kung Fu/Wushu</Card.Title>
              <Card.Text style={{ textAlign: 'justify', color: 'white' }}>
                Kung Fu is a collective term for Chinese martial arts, encompassing a wide range of styles such as Shaolin Kung Fu, Wing Chun, and Tai Chi. It includes both armed and unarmed techniques and often incorporates philosophical principles such as Taoism and Confucianism.              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr />

    </>
  )
}

export default Content