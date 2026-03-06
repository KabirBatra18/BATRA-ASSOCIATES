export default function GoogleMap() {
  return (
    <section className="w-full" aria-label="Office location map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.103768770696!2d77.12853399999999!3d28.6693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03b0d29e5c31%3A0xc6f1b0cc1b7e9a6!2s5%2F3%2C%20Road%20No.%205%2C%20Punjabi%20Bagh%20East%2C%20Punjabi%20Bagh%20Cooperative%20Housing%20Society%2C%20East%20Punjabi%20Bagh%2C%20Punjabi%20Bagh%2C%20New%20Delhi%2C%20Delhi%2C%20110026!5e0!3m2!1sen!2sin!4v1709925644219!5m2!1sen!2sin"
        width="100%"
        height="400"
        className="h-[300px] md:h-[400px]"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Batra & Associates office location - House No. 3, Road No. 5, East Punjabi Bagh, New Delhi"
      />
    </section>
  );
}
