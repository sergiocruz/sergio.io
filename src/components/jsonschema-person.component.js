import React from 'react'

const JsonSchemaPerson = () => (
  <div itemScope="" itemType="http://schema.org/Person">
    <meta itemProp="gender" content="Male" />
    <meta itemProp="jobTitle" content="Software Engineering Manager" />
    <meta itemProp="url" content="https://sergio.io/" />
    <meta itemProp="memberOf" content="Orlando Devs, Inc." />
    <meta itemProp="memberOf" content="OrlandoJS" />
    <meta
      itemProp="image"
      content="https://twitter.com/hashtagserg/profile_image?size=original"
    />
    <span itemProp="name" className="font-size-sm">
      <link itemProp="sameAs" href="https://twitter.com/hashtagserg" />
      <link itemProp="sameAs" href="https://github.com/sergiocruz" />
      <link itemProp="sameAs" href="https://www.linkedin.com/in/sergiorlcruz" />
      Sergio Cruz
    </span>
  </div>
)

export default JsonSchemaPerson
