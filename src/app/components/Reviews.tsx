import Script from "next/script";

export default function Reviews() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="elfsight-app-7a3f2c43-945a-4540-bda8-a70793c8a95c"
          data-elfsight-app-lazy=""
        >
          {/* Fallback content while widget loads */}
          <div className="text-center py-8 text-muted text-sm">
            <p>Loading reviews...</p>
            <p className="mt-2">
              <a
                href="https://g.co/kgs/batraassociates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View our reviews on Google
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
