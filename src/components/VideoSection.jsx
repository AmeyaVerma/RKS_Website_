import React from 'react';
import parse from 'html-react-parser';

const VideoSection = () => {
    const htmlString = `<style>
  .rks-hero {
    position: relative;
    min-height: 700px;
    display: flex;
    align-items: center;
    background-image:
      linear-gradient(to right, #dce8f5 30%, rgba(220,232,245,0.85) 48%, rgba(220,232,245,0) 68%),
      url('/images/logistics-hero.png.jpeg');
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .rks-hero-content {
    position: relative;
    z-index: 1;
    max-width: 560px;
    padding: 100px 0 100px 0;
  }
  .rks-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    background: rgba(255,255,255,0.55);
    border: 1px solid rgba(13,45,110,0.15);
    border-radius: 8px;
    padding: 12px 18px;
  }
  @media (max-width: 767px) {
    .rks-hero {
      min-height: unset;
      background-image:
        linear-gradient(to bottom, rgba(220,232,245,0) 30%, #dce8f5 65%),
        url('/images/logistics-hero.png.jpeg');
      background-size: cover;
      background-position: center top;
      padding-top: 260px;
      align-items: flex-end;
    }
    .rks-hero-content {
      max-width: 100%;
      padding: 0 0 60px 0;
    }
  }
</style>
<section class="rks-hero">
  <div class="auto-container" style="width:100%">
    <div class="rks-hero-content">
      <h2 style="color:#0d2d6e;font-size:2.6rem;font-weight:800;line-height:1.2;margin-bottom:18px">RKS Global Logistics, Connecting Markets Through Smart Logistics.</h2>
      <p style="color:#1a3a60;font-size:1.02rem;margin-bottom:26px;opacity:0.9">Get your cargo moving seamlessly &amp; timely. Top-notch service quality with customized solutions for you to connect with the world efficiently.</p>
      <hr style="border:none;border-top:1px solid rgba(13,45,110,0.2);margin-bottom:26px">
      <div style="display:flex;flex-wrap:wrap;gap:14px;margin-bottom:34px">
        <div class="rks-hero-badge">
          <img src="/images/extracted/asset_26.webp" alt style="width:42px;height:42px;object-fit:contain;flex-shrink:0">
          <span style="color:#0d2d6e;font-weight:700;font-size:0.9rem;line-height:1.3">25+ Years of<br>Experience</span>
        </div>
        <div class="rks-hero-badge">
          <img src="/images/extracted/asset_27.webp" alt style="width:42px;height:42px;object-fit:contain;flex-shrink:0">
          <span style="color:#0d2d6e;font-weight:700;font-size:0.9rem;line-height:1.3">Global Network</span>
        </div>
      </div>
      <a href="/contact.html" style="color:#0d2d6e;font-weight:600;font-size:1rem;text-decoration:none;display:inline-flex;align-items:center;gap:7px">Request a quote &#8594;</a>
    </div>
  </div>
</section>`;
    return (
        <>
            {parse(htmlString)}
        </>
    );
};

export default VideoSection;

