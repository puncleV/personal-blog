<template>
  <div class="v-box">
    <div class="content">
      <div>
        <h1>About</h1>
        <p>
          <!-- quintuple I :D-->
          I am an enthusiastic software engineer, always looking for new challenges and an opportunity to improve myself
          as a professional. I am looking for a team that shares my opinion that code should be written for people, not
          for a machine or its author. I love to write tests (sometimes I write too much, but i’m working on it), I am
          often able to look into a problem from the deepest point and suggest different solutions (fast and easy,
          not-so-fast but better). I love to write a test before fix something if i have time of course so TDD is cool
          in my opinion but not always possible. Always trying to get business specific competences as soon as possible
          which helps me to make better designed code.
        </p>
        <p>
          Right now I am working a lot with Node.js stack and prefer to use Typescript. I don't mind using some frontend
          technologies. Mostly I've worked with:
        </p>
        <ul>
          <li>Node.js</li>
          <li>Typescript</li>
          <li>Mocha</li>
          <li>PostgreSQL</li>
          <li>Mysql (MariaDB)</li>
          <li>Unit testing</li>
          <li>Microservices</li>
          <li>Unix-like systems</li>
        </ul>
        <p>
          I like to learn deep secrets of technologies I use, but mostly I spend my free time without
          programming-related stuff. Sometimes I'm trying to learn new programming language or new field (like gamedev
          with Unity, I have some complete projects on my github) I've read many literature about coding and code design
          so I am able to write well supported, scalable code with a good test coverage. In this year (2020) I am going
          to learn more Scala, Unity with 3D and complete Standford's algorithms course on coursera.
        </p>
        <p>
          To speak of non-technical staff, I am in love with water: swimming, diving drives me crazy! I also like
          history and read some science stuff.
        </p>
        <h1>Contacts</h1>
        <ul>
          <li><a class="link" href="https://github.com/punkkk">Github</a></li>
          <li><a class="link" href="https://www.linkedin.com/in/kozzlov/">LinkedIn</a></li>
          <li><a class="link" href="mailto:victor@kozlov.io">Mail me</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about > div {
  width: calc(40% + 40px);
  text-align: justify;
}

h1 {
  color: #48465b;
  font-size: 3.5rem;
}

p,
ul {
  color: #74788d;
  font-size: 1.25rem;
}

.link {
  cursor: pointer;
  color: #5d78ff;
}

.link:hover {
  text-decoration: underline;
}
</style>
